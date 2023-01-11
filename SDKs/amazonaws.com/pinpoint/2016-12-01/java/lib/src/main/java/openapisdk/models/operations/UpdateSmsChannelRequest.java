package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSmsChannelRequest {
    public UpdateSmsChannelPathParams pathParams;
    public UpdateSmsChannelRequest withPathParams(UpdateSmsChannelPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateSmsChannelHeaders headers;
    public UpdateSmsChannelRequest withHeaders(UpdateSmsChannelHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateSmsChannelRequestBody request;
    public UpdateSmsChannelRequest withRequest(UpdateSmsChannelRequestBody request) {
        this.request = request;
        return this;
    }
}