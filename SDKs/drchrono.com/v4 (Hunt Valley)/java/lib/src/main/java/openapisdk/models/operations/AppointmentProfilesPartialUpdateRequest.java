package openapisdk.models.operations;



public class AppointmentProfilesPartialUpdateRequest {
    public AppointmentProfilesPartialUpdatePathParams pathParams;
    public AppointmentProfilesPartialUpdateRequest withPathParams(AppointmentProfilesPartialUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AppointmentProfilesPartialUpdateQueryParams queryParams;
    public AppointmentProfilesPartialUpdateRequest withQueryParams(AppointmentProfilesPartialUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AppointmentProfilesPartialUpdateSecurity security;
    public AppointmentProfilesPartialUpdateRequest withSecurity(AppointmentProfilesPartialUpdateSecurity security) {
        this.security = security;
        return this;
    }
}