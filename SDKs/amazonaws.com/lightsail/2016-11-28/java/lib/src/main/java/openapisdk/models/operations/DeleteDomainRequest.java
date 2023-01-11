package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteDomainRequest {
    public DeleteDomainHeaders headers;
    public DeleteDomainRequest withHeaders(DeleteDomainHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteDomainRequest request;
    public DeleteDomainRequest withRequest(openapisdk.models.shared.DeleteDomainRequest request) {
        this.request = request;
        return this;
    }
}