package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssociateCustomDomainRequest {
    public AssociateCustomDomainHeaders headers;
    public AssociateCustomDomainRequest withHeaders(AssociateCustomDomainHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AssociateCustomDomainRequest request;
    public AssociateCustomDomainRequest withRequest(openapisdk.models.shared.AssociateCustomDomainRequest request) {
        this.request = request;
        return this;
    }
}