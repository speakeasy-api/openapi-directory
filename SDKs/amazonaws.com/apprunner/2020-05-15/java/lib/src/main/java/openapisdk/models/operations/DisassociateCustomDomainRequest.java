package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisassociateCustomDomainRequest {
    public DisassociateCustomDomainHeaders headers;
    public DisassociateCustomDomainRequest withHeaders(DisassociateCustomDomainHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DisassociateCustomDomainRequest request;
    public DisassociateCustomDomainRequest withRequest(openapisdk.models.shared.DisassociateCustomDomainRequest request) {
        this.request = request;
        return this;
    }
}