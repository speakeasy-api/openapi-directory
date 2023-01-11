package openapisdk.models.operations;



public class AppointmentProfilesListRequest {
    public AppointmentProfilesListQueryParams queryParams;
    public AppointmentProfilesListRequest withQueryParams(AppointmentProfilesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AppointmentProfilesListSecurity security;
    public AppointmentProfilesListRequest withSecurity(AppointmentProfilesListSecurity security) {
        this.security = security;
        return this;
    }
}