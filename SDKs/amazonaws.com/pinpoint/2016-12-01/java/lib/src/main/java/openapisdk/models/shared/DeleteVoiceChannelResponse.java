package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteVoiceChannelResponse {
    @JsonProperty("VoiceChannelResponse")
    public VoiceChannelResponse voiceChannelResponse;
    public DeleteVoiceChannelResponse withVoiceChannelResponse(VoiceChannelResponse voiceChannelResponse) {
        this.voiceChannelResponse = voiceChannelResponse;
        return this;
    }
}