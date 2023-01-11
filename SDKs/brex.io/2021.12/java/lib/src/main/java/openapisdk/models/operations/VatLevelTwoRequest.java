package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VatLevelTwoRequest {
    public VatLevelTwoPathParams pathParams;
    public VatLevelTwoRequest withPathParams(VatLevelTwoPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public VatLevelTwoRequestBody request;
    public VatLevelTwoRequest withRequest(VatLevelTwoRequestBody request) {
        this.request = request;
        return this;
    }
    public VatLevelTwoSecurity security;
    public VatLevelTwoRequest withSecurity(VatLevelTwoSecurity security) {
        this.security = security;
        return this;
    }
}