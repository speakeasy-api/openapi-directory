package openapisdk.models.operations;



public class AppointmentProfilesReadRequest {
    public AppointmentProfilesReadPathParams pathParams;
    public AppointmentProfilesReadRequest withPathParams(AppointmentProfilesReadPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AppointmentProfilesReadQueryParams queryParams;
    public AppointmentProfilesReadRequest withQueryParams(AppointmentProfilesReadQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AppointmentProfilesReadSecurity security;
    public AppointmentProfilesReadRequest withSecurity(AppointmentProfilesReadSecurity security) {
        this.security = security;
        return this;
    }
}