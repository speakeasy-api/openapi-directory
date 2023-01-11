package openapisdk.models.operations;



public class AppointmentsListRequest {
    public AppointmentsListQueryParams queryParams;
    public AppointmentsListRequest withQueryParams(AppointmentsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AppointmentsListSecurity security;
    public AppointmentsListRequest withSecurity(AppointmentsListSecurity security) {
        this.security = security;
        return this;
    }
}