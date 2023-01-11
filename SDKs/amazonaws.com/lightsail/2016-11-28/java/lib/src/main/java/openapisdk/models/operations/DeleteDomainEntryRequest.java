package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteDomainEntryRequest {
    public DeleteDomainEntryHeaders headers;
    public DeleteDomainEntryRequest withHeaders(DeleteDomainEntryHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteDomainEntryRequest request;
    public DeleteDomainEntryRequest withRequest(openapisdk.models.shared.DeleteDomainEntryRequest request) {
        this.request = request;
        return this;
    }
}