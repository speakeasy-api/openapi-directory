package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateChannelRequest {
    public CreateChannelHeaders headers;
    public CreateChannelRequest withHeaders(CreateChannelHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateChannelRequestBody request;
    public CreateChannelRequest withRequest(CreateChannelRequestBody request) {
        this.request = request;
        return this;
    }
}