package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeregisterVolumeRequest {
    @JsonProperty("VolumeId")
    public String volumeId;
    public DeregisterVolumeRequest withVolumeId(String volumeId) {
        this.volumeId = volumeId;
        return this;
    }
}