package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateContactChannelRequest {
    public UpdateContactChannelHeaders headers;
    public UpdateContactChannelRequest withHeaders(UpdateContactChannelHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateContactChannelRequest request;
    public UpdateContactChannelRequest withRequest(openapisdk.models.shared.UpdateContactChannelRequest request) {
        this.request = request;
        return this;
    }
}