package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateApnsVoipSandboxChannelRequestBody {
    @JsonProperty("APNSVoipSandboxChannelRequest")
    public UpdateApnsVoipSandboxChannelRequestBodyApnsVoipSandboxChannelRequest apnsVoipSandboxChannelRequest;
    public UpdateApnsVoipSandboxChannelRequestBody withApnsVoipSandboxChannelRequest(UpdateApnsVoipSandboxChannelRequestBodyApnsVoipSandboxChannelRequest apnsVoipSandboxChannelRequest) {
        this.apnsVoipSandboxChannelRequest = apnsVoipSandboxChannelRequest;
        return this;
    }
}