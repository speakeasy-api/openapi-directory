package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TransferDomainRequest {
    public TransferDomainHeaders headers;
    public TransferDomainRequest withHeaders(TransferDomainHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TransferDomainRequest request;
    public TransferDomainRequest withRequest(openapisdk.models.shared.TransferDomainRequest request) {
        this.request = request;
        return this;
    }
}