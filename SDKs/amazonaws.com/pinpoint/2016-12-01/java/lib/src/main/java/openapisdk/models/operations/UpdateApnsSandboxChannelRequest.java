package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateApnsSandboxChannelRequest {
    public UpdateApnsSandboxChannelPathParams pathParams;
    public UpdateApnsSandboxChannelRequest withPathParams(UpdateApnsSandboxChannelPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateApnsSandboxChannelHeaders headers;
    public UpdateApnsSandboxChannelRequest withHeaders(UpdateApnsSandboxChannelHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateApnsSandboxChannelRequestBody request;
    public UpdateApnsSandboxChannelRequest withRequest(UpdateApnsSandboxChannelRequestBody request) {
        this.request = request;
        return this;
    }
}