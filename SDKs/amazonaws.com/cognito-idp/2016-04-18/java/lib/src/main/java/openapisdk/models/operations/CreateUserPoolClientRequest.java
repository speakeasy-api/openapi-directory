package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateUserPoolClientRequest {
    public CreateUserPoolClientHeaders headers;
    public CreateUserPoolClientRequest withHeaders(CreateUserPoolClientHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateUserPoolClientRequest request;
    public CreateUserPoolClientRequest withRequest(openapisdk.models.shared.CreateUserPoolClientRequest request) {
        this.request = request;
        return this;
    }
}