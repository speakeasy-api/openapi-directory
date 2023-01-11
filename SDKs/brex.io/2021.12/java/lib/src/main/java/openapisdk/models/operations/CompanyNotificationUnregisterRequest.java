package openapisdk.models.operations;



public class CompanyNotificationUnregisterRequest {
    public CompanyNotificationUnregisterPathParams pathParams;
    public CompanyNotificationUnregisterRequest withPathParams(CompanyNotificationUnregisterPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CompanyNotificationUnregisterSecurity security;
    public CompanyNotificationUnregisterRequest withSecurity(CompanyNotificationUnregisterSecurity security) {
        this.security = security;
        return this;
    }
}