package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateContactChannelRequest {
    public CreateContactChannelHeaders headers;
    public CreateContactChannelRequest withHeaders(CreateContactChannelHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateContactChannelRequest request;
    public CreateContactChannelRequest withRequest(openapisdk.models.shared.CreateContactChannelRequest request) {
        this.request = request;
        return this;
    }
}