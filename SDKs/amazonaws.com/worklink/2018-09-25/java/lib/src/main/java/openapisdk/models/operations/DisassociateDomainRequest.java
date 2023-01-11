package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisassociateDomainRequest {
    public DisassociateDomainHeaders headers;
    public DisassociateDomainRequest withHeaders(DisassociateDomainHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DisassociateDomainRequestBody request;
    public DisassociateDomainRequest withRequest(DisassociateDomainRequestBody request) {
        this.request = request;
        return this;
    }
}