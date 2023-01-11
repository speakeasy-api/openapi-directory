package openapisdk.models.operations;



public class CompanyMonitorUnregisterRequest {
    public CompanyMonitorUnregisterPathParams pathParams;
    public CompanyMonitorUnregisterRequest withPathParams(CompanyMonitorUnregisterPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CompanyMonitorUnregisterSecurity security;
    public CompanyMonitorUnregisterRequest withSecurity(CompanyMonitorUnregisterSecurity security) {
        this.security = security;
        return this;
    }
}