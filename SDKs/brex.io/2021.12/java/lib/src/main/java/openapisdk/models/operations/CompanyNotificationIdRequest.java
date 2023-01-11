package openapisdk.models.operations;



public class CompanyNotificationIdRequest {
    public CompanyNotificationIdPathParams pathParams;
    public CompanyNotificationIdRequest withPathParams(CompanyNotificationIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CompanyNotificationIdSecurity security;
    public CompanyNotificationIdRequest withSecurity(CompanyNotificationIdSecurity security) {
        this.security = security;
        return this;
    }
}