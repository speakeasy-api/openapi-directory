package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateUserPoolDomainRequest {
    public UpdateUserPoolDomainHeaders headers;
    public UpdateUserPoolDomainRequest withHeaders(UpdateUserPoolDomainHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateUserPoolDomainRequest request;
    public UpdateUserPoolDomainRequest withRequest(openapisdk.models.shared.UpdateUserPoolDomainRequest request) {
        this.request = request;
        return this;
    }
}