package openapisdk.models.operations;



public class AppointmentProfilesUpdateRequest {
    public AppointmentProfilesUpdatePathParams pathParams;
    public AppointmentProfilesUpdateRequest withPathParams(AppointmentProfilesUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AppointmentProfilesUpdateQueryParams queryParams;
    public AppointmentProfilesUpdateRequest withQueryParams(AppointmentProfilesUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AppointmentProfilesUpdateSecurity security;
    public AppointmentProfilesUpdateRequest withSecurity(AppointmentProfilesUpdateSecurity security) {
        this.security = security;
        return this;
    }
}