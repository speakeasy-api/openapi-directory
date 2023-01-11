package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateChannelRequest {
    public UpdateChannelPathParams pathParams;
    public UpdateChannelRequest withPathParams(UpdateChannelPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateChannelHeaders headers;
    public UpdateChannelRequest withHeaders(UpdateChannelHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateChannelRequestBody request;
    public UpdateChannelRequest withRequest(UpdateChannelRequestBody request) {
        this.request = request;
        return this;
    }
}