package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateContactMethodRequest {
    public CreateContactMethodHeaders headers;
    public CreateContactMethodRequest withHeaders(CreateContactMethodHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateContactMethodRequest request;
    public CreateContactMethodRequest withRequest(openapisdk.models.shared.CreateContactMethodRequest request) {
        this.request = request;
        return this;
    }
}