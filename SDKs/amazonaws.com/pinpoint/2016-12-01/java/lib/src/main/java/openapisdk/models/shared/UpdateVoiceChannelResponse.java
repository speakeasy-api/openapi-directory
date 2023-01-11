package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateVoiceChannelResponse {
    @JsonProperty("VoiceChannelResponse")
    public VoiceChannelResponse voiceChannelResponse;
    public UpdateVoiceChannelResponse withVoiceChannelResponse(VoiceChannelResponse voiceChannelResponse) {
        this.voiceChannelResponse = voiceChannelResponse;
        return this;
    }
}