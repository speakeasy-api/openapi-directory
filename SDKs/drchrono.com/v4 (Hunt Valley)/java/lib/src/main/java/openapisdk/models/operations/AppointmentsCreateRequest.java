package openapisdk.models.operations;



public class AppointmentsCreateRequest {
    public AppointmentsCreateQueryParams queryParams;
    public AppointmentsCreateRequest withQueryParams(AppointmentsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AppointmentsCreateSecurity security;
    public AppointmentsCreateRequest withSecurity(AppointmentsCreateSecurity security) {
        this.security = security;
        return this;
    }
}