package openapisdk.models.operations;



public class AppointmentsDeleteRequest {
    public AppointmentsDeletePathParams pathParams;
    public AppointmentsDeleteRequest withPathParams(AppointmentsDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AppointmentsDeleteQueryParams queryParams;
    public AppointmentsDeleteRequest withQueryParams(AppointmentsDeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AppointmentsDeleteSecurity security;
    public AppointmentsDeleteRequest withSecurity(AppointmentsDeleteSecurity security) {
        this.security = security;
        return this;
    }
}