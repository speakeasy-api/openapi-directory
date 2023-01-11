package openapisdk.models.operations;



public class ReminderProfilesUpdateRequest {
    public ReminderProfilesUpdatePathParams pathParams;
    public ReminderProfilesUpdateRequest withPathParams(ReminderProfilesUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ReminderProfilesUpdateQueryParams queryParams;
    public ReminderProfilesUpdateRequest withQueryParams(ReminderProfilesUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ReminderProfilesUpdateSecurity security;
    public ReminderProfilesUpdateRequest withSecurity(ReminderProfilesUpdateSecurity security) {
        this.security = security;
        return this;
    }
}