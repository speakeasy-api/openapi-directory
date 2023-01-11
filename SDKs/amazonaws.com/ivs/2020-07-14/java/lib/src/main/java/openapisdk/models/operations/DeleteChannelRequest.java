package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteChannelRequest {
    public DeleteChannelHeaders headers;
    public DeleteChannelRequest withHeaders(DeleteChannelHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DeleteChannelRequestBody request;
    public DeleteChannelRequest withRequest(DeleteChannelRequestBody request) {
        this.request = request;
        return this;
    }
}