package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetApnsVoipSandboxChannelResponse {
    @JsonProperty("APNSVoipSandboxChannelResponse")
    public ApnsVoipSandboxChannelResponse apnsVoipSandboxChannelResponse;
    public GetApnsVoipSandboxChannelResponse withApnsVoipSandboxChannelResponse(ApnsVoipSandboxChannelResponse apnsVoipSandboxChannelResponse) {
        this.apnsVoipSandboxChannelResponse = apnsVoipSandboxChannelResponse;
        return this;
    }
}