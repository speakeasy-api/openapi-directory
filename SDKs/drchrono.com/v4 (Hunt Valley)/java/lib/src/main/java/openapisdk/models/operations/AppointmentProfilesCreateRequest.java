package openapisdk.models.operations;



public class AppointmentProfilesCreateRequest {
    public AppointmentProfilesCreateQueryParams queryParams;
    public AppointmentProfilesCreateRequest withQueryParams(AppointmentProfilesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AppointmentProfilesCreateSecurity security;
    public AppointmentProfilesCreateRequest withSecurity(AppointmentProfilesCreateSecurity security) {
        this.security = security;
        return this;
    }
}