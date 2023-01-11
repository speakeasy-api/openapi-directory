package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssociateDomainRequest {
    public AssociateDomainHeaders headers;
    public AssociateDomainRequest withHeaders(AssociateDomainHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AssociateDomainRequestBody request;
    public AssociateDomainRequest withRequest(AssociateDomainRequestBody request) {
        this.request = request;
        return this;
    }
}