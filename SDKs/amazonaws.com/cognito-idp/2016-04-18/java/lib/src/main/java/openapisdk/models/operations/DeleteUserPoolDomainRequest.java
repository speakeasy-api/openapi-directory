package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteUserPoolDomainRequest {
    public DeleteUserPoolDomainHeaders headers;
    public DeleteUserPoolDomainRequest withHeaders(DeleteUserPoolDomainHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteUserPoolDomainRequest request;
    public DeleteUserPoolDomainRequest withRequest(openapisdk.models.shared.DeleteUserPoolDomainRequest request) {
        this.request = request;
        return this;
    }
}