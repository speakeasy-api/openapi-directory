package openapisdk.models.operations;



public class AppointmentsReadRequest {
    public AppointmentsReadPathParams pathParams;
    public AppointmentsReadRequest withPathParams(AppointmentsReadPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AppointmentsReadQueryParams queryParams;
    public AppointmentsReadRequest withQueryParams(AppointmentsReadQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AppointmentsReadSecurity security;
    public AppointmentsReadRequest withSecurity(AppointmentsReadSecurity security) {
        this.security = security;
        return this;
    }
}