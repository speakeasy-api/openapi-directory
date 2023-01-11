package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateVoiceChannelRequestBodyVoiceChannelRequest
 * Specifies the status and settings of the voice channel for an application.
**/
public class UpdateVoiceChannelRequestBodyVoiceChannelRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Enabled")
    public Boolean enabled;
    public UpdateVoiceChannelRequestBodyVoiceChannelRequest withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
}