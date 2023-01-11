package openapisdk.models.operations;



public class AppointmentsPartialUpdateRequest {
    public AppointmentsPartialUpdatePathParams pathParams;
    public AppointmentsPartialUpdateRequest withPathParams(AppointmentsPartialUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AppointmentsPartialUpdateQueryParams queryParams;
    public AppointmentsPartialUpdateRequest withQueryParams(AppointmentsPartialUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AppointmentsPartialUpdateSecurity security;
    public AppointmentsPartialUpdateRequest withSecurity(AppointmentsPartialUpdateSecurity security) {
        this.security = security;
        return this;
    }
}