package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateVoiceChannelRequestBody {
    @JsonProperty("VoiceChannelRequest")
    public UpdateVoiceChannelRequestBodyVoiceChannelRequest voiceChannelRequest;
    public UpdateVoiceChannelRequestBody withVoiceChannelRequest(UpdateVoiceChannelRequestBodyVoiceChannelRequest voiceChannelRequest) {
        this.voiceChannelRequest = voiceChannelRequest;
        return this;
    }
}