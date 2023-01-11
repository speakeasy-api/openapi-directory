package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDomainEntryRequest {
    public CreateDomainEntryHeaders headers;
    public CreateDomainEntryRequest withHeaders(CreateDomainEntryHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateDomainEntryRequest request;
    public CreateDomainEntryRequest withRequest(openapisdk.models.shared.CreateDomainEntryRequest request) {
        this.request = request;
        return this;
    }
}