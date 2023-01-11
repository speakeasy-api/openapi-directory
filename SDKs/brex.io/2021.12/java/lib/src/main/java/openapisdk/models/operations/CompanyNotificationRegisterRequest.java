package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CompanyNotificationRegisterRequest {
    public CompanyNotificationRegisterPathParams pathParams;
    public CompanyNotificationRegisterRequest withPathParams(CompanyNotificationRegisterPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CompanyNotificationRegisterRequestBody request;
    public CompanyNotificationRegisterRequest withRequest(CompanyNotificationRegisterRequestBody request) {
        this.request = request;
        return this;
    }
    public CompanyNotificationRegisterSecurity security;
    public CompanyNotificationRegisterRequest withSecurity(CompanyNotificationRegisterSecurity security) {
        this.security = security;
        return this;
    }
}