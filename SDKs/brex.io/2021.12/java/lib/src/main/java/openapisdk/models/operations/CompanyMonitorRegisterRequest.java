package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CompanyMonitorRegisterRequest {
    public CompanyMonitorRegisterPathParams pathParams;
    public CompanyMonitorRegisterRequest withPathParams(CompanyMonitorRegisterPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CompanyMonitorRegisterRequestBody request;
    public CompanyMonitorRegisterRequest withRequest(CompanyMonitorRegisterRequestBody request) {
        this.request = request;
        return this;
    }
    public CompanyMonitorRegisterSecurity security;
    public CompanyMonitorRegisterRequest withSecurity(CompanyMonitorRegisterSecurity security) {
        this.security = security;
        return this;
    }
}