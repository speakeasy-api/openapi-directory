package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VatLookupRequest {
    public VatLookupPathParams pathParams;
    public VatLookupRequest withPathParams(VatLookupPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public VatLookupRequestBody request;
    public VatLookupRequest withRequest(VatLookupRequestBody request) {
        this.request = request;
        return this;
    }
    public VatLookupSecurity security;
    public VatLookupRequest withSecurity(VatLookupSecurity security) {
        this.security = security;
        return this;
    }
}