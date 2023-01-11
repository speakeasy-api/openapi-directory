package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetVoiceChannelResponse {
    @JsonProperty("VoiceChannelResponse")
    public VoiceChannelResponse voiceChannelResponse;
    public GetVoiceChannelResponse withVoiceChannelResponse(VoiceChannelResponse voiceChannelResponse) {
        this.voiceChannelResponse = voiceChannelResponse;
        return this;
    }
}