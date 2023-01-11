package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetChannelRequest {
    public GetChannelHeaders headers;
    public GetChannelRequest withHeaders(GetChannelHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public GetChannelRequestBody request;
    public GetChannelRequest withRequest(GetChannelRequestBody request) {
        this.request = request;
        return this;
    }
}