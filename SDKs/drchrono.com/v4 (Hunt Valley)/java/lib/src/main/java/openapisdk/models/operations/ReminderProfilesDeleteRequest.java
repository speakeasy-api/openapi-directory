package openapisdk.models.operations;



public class ReminderProfilesDeleteRequest {
    public ReminderProfilesDeletePathParams pathParams;
    public ReminderProfilesDeleteRequest withPathParams(ReminderProfilesDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ReminderProfilesDeleteQueryParams queryParams;
    public ReminderProfilesDeleteRequest withQueryParams(ReminderProfilesDeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ReminderProfilesDeleteSecurity security;
    public ReminderProfilesDeleteRequest withSecurity(ReminderProfilesDeleteSecurity security) {
        this.security = security;
        return this;
    }
}