package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDomainEntryRequest {
    public UpdateDomainEntryHeaders headers;
    public UpdateDomainEntryRequest withHeaders(UpdateDomainEntryHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateDomainEntryRequest request;
    public UpdateDomainEntryRequest withRequest(openapisdk.models.shared.UpdateDomainEntryRequest request) {
        this.request = request;
        return this;
    }
}