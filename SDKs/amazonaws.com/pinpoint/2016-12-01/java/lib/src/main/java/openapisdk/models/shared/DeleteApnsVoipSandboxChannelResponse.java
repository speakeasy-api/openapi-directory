package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteApnsVoipSandboxChannelResponse {
    @JsonProperty("APNSVoipSandboxChannelResponse")
    public ApnsVoipSandboxChannelResponse apnsVoipSandboxChannelResponse;
    public DeleteApnsVoipSandboxChannelResponse withApnsVoipSandboxChannelResponse(ApnsVoipSandboxChannelResponse apnsVoipSandboxChannelResponse) {
        this.apnsVoipSandboxChannelResponse = apnsVoipSandboxChannelResponse;
        return this;
    }
}