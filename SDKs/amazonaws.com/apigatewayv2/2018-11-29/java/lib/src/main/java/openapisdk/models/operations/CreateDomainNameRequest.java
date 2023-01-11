package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDomainNameRequest {
    public CreateDomainNameHeaders headers;
    public CreateDomainNameRequest withHeaders(CreateDomainNameHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateDomainNameRequestBody request;
    public CreateDomainNameRequest withRequest(CreateDomainNameRequestBody request) {
        this.request = request;
        return this;
    }
}