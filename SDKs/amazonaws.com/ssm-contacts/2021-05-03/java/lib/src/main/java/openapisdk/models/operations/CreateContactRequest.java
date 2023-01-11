package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateContactRequest {
    public CreateContactHeaders headers;
    public CreateContactRequest withHeaders(CreateContactHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateContactRequest request;
    public CreateContactRequest withRequest(openapisdk.models.shared.CreateContactRequest request) {
        this.request = request;
        return this;
    }
}