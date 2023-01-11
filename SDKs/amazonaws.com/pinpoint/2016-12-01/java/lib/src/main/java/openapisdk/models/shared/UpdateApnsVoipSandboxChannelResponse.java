package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateApnsVoipSandboxChannelResponse {
    @JsonProperty("APNSVoipSandboxChannelResponse")
    public ApnsVoipSandboxChannelResponse apnsVoipSandboxChannelResponse;
    public UpdateApnsVoipSandboxChannelResponse withApnsVoipSandboxChannelResponse(ApnsVoipSandboxChannelResponse apnsVoipSandboxChannelResponse) {
        this.apnsVoipSandboxChannelResponse = apnsVoipSandboxChannelResponse;
        return this;
    }
}