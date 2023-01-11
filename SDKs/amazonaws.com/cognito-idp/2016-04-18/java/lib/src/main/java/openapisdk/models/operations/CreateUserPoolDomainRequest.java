package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateUserPoolDomainRequest {
    public CreateUserPoolDomainHeaders headers;
    public CreateUserPoolDomainRequest withHeaders(CreateUserPoolDomainHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateUserPoolDomainRequest request;
    public CreateUserPoolDomainRequest withRequest(openapisdk.models.shared.CreateUserPoolDomainRequest request) {
        this.request = request;
        return this;
    }
}