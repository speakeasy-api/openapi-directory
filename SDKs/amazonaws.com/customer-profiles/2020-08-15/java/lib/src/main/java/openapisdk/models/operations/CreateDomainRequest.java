package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDomainRequest {
    public CreateDomainPathParams pathParams;
    public CreateDomainRequest withPathParams(CreateDomainPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreateDomainHeaders headers;
    public CreateDomainRequest withHeaders(CreateDomainHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateDomainRequestBody request;
    public CreateDomainRequest withRequest(CreateDomainRequestBody request) {
        this.request = request;
        return this;
    }
}