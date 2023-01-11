package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateApnsVoipSandboxChannelRequest {
    public UpdateApnsVoipSandboxChannelPathParams pathParams;
    public UpdateApnsVoipSandboxChannelRequest withPathParams(UpdateApnsVoipSandboxChannelPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateApnsVoipSandboxChannelHeaders headers;
    public UpdateApnsVoipSandboxChannelRequest withHeaders(UpdateApnsVoipSandboxChannelHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateApnsVoipSandboxChannelRequestBody request;
    public UpdateApnsVoipSandboxChannelRequest withRequest(UpdateApnsVoipSandboxChannelRequestBody request) {
        this.request = request;
        return this;
    }
}