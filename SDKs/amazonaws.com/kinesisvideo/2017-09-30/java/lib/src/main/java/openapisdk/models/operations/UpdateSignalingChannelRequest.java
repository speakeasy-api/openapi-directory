package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSignalingChannelRequest {
    public UpdateSignalingChannelHeaders headers;
    public UpdateSignalingChannelRequest withHeaders(UpdateSignalingChannelHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateSignalingChannelRequestBody request;
    public UpdateSignalingChannelRequest withRequest(UpdateSignalingChannelRequestBody request) {
        this.request = request;
        return this;
    }
}