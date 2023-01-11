package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UnassignVolumeRequest {
    @JsonProperty("VolumeId")
    public String volumeId;
    public UnassignVolumeRequest withVolumeId(String volumeId) {
        this.volumeId = volumeId;
        return this;
    }
}