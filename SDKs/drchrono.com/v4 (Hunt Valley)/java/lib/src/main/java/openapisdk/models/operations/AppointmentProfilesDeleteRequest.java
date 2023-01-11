package openapisdk.models.operations;



public class AppointmentProfilesDeleteRequest {
    public AppointmentProfilesDeletePathParams pathParams;
    public AppointmentProfilesDeleteRequest withPathParams(AppointmentProfilesDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AppointmentProfilesDeleteQueryParams queryParams;
    public AppointmentProfilesDeleteRequest withQueryParams(AppointmentProfilesDeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AppointmentProfilesDeleteSecurity security;
    public AppointmentProfilesDeleteRequest withSecurity(AppointmentProfilesDeleteSecurity security) {
        this.security = security;
        return this;
    }
}