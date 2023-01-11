package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateChannelRequest {
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