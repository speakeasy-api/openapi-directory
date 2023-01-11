package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateEmailChannelRequest {
    public UpdateEmailChannelPathParams pathParams;
    public UpdateEmailChannelRequest withPathParams(UpdateEmailChannelPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateEmailChannelHeaders headers;
    public UpdateEmailChannelRequest withHeaders(UpdateEmailChannelHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateEmailChannelRequestBody request;
    public UpdateEmailChannelRequest withRequest(UpdateEmailChannelRequestBody request) {
        this.request = request;
        return this;
    }
}