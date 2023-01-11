package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VatComprehensiveRequest {
    public VatComprehensivePathParams pathParams;
    public VatComprehensiveRequest withPathParams(VatComprehensivePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public VatComprehensiveRequestBody request;
    public VatComprehensiveRequest withRequest(VatComprehensiveRequestBody request) {
        this.request = request;
        return this;
    }
    public VatComprehensiveSecurity security;
    public VatComprehensiveRequest withSecurity(VatComprehensiveSecurity security) {
        this.security = security;
        return this;
    }
}