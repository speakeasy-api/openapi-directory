package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSignalingChannelRequest {
    public CreateSignalingChannelHeaders headers;
    public CreateSignalingChannelRequest withHeaders(CreateSignalingChannelHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateSignalingChannelRequestBody request;
    public CreateSignalingChannelRequest withRequest(CreateSignalingChannelRequestBody request) {
        this.request = request;
        return this;
    }
}