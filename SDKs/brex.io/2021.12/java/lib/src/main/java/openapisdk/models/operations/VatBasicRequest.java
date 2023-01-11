package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VatBasicRequest {
    public VatBasicPathParams pathParams;
    public VatBasicRequest withPathParams(VatBasicPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public VatBasicRequestBody request;
    public VatBasicRequest withRequest(VatBasicRequestBody request) {
        this.request = request;
        return this;
    }
    public VatBasicSecurity security;
    public VatBasicRequest withSecurity(VatBasicSecurity security) {
        this.security = security;
        return this;
    }
}