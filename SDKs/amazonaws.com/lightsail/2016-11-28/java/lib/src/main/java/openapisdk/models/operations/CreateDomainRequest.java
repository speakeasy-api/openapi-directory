package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDomainRequest {
    public CreateDomainHeaders headers;
    public CreateDomainRequest withHeaders(CreateDomainHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateDomainRequest request;
    public CreateDomainRequest withRequest(openapisdk.models.shared.CreateDomainRequest request) {
        this.request = request;
        return this;
    }
}