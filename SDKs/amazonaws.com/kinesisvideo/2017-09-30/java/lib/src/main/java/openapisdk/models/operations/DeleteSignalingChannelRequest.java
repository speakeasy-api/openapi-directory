package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteSignalingChannelRequest {
    public DeleteSignalingChannelHeaders headers;
    public DeleteSignalingChannelRequest withHeaders(DeleteSignalingChannelHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DeleteSignalingChannelRequestBody request;
    public DeleteSignalingChannelRequest withRequest(DeleteSignalingChannelRequestBody request) {
        this.request = request;
        return this;
    }
}