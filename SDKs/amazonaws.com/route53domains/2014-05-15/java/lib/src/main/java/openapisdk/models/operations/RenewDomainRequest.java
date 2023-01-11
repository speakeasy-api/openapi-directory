package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RenewDomainRequest {
    public RenewDomainHeaders headers;
    public RenewDomainRequest withHeaders(RenewDomainHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RenewDomainRequest request;
    public RenewDomainRequest withRequest(openapisdk.models.shared.RenewDomainRequest request) {
        this.request = request;
        return this;
    }
}