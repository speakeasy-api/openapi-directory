package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateBaiduChannelRequest {
    public UpdateBaiduChannelPathParams pathParams;
    public UpdateBaiduChannelRequest withPathParams(UpdateBaiduChannelPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateBaiduChannelHeaders headers;
    public UpdateBaiduChannelRequest withHeaders(UpdateBaiduChannelHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateBaiduChannelRequestBody request;
    public UpdateBaiduChannelRequest withRequest(UpdateBaiduChannelRequestBody request) {
        this.request = request;
        return this;
    }
}