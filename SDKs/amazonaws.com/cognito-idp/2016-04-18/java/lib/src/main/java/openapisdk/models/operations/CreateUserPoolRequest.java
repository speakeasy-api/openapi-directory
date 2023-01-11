package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateUserPoolRequest {
    public CreateUserPoolHeaders headers;
    public CreateUserPoolRequest withHeaders(CreateUserPoolHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateUserPoolRequest request;
    public CreateUserPoolRequest withRequest(openapisdk.models.shared.CreateUserPoolRequest request) {
        this.request = request;
        return this;
    }
}