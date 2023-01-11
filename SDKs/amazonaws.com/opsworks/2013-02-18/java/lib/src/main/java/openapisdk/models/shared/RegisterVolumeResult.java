package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RegisterVolumeResult
 * Contains the response to a <code>RegisterVolume</code> request.
**/
public class RegisterVolumeResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VolumeId")
    public String volumeId;
    public RegisterVolumeResult withVolumeId(String volumeId) {
        this.volumeId = volumeId;
        return this;
    }
}