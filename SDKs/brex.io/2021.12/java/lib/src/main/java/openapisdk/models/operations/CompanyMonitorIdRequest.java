package openapisdk.models.operations;



public class CompanyMonitorIdRequest {
    public CompanyMonitorIdPathParams pathParams;
    public CompanyMonitorIdRequest withPathParams(CompanyMonitorIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CompanyMonitorIdSecurity security;
    public CompanyMonitorIdRequest withSecurity(CompanyMonitorIdSecurity security) {
        this.security = security;
        return this;
    }
}