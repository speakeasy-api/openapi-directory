package openapisdk.models.operations;



public class ReminderProfilesListRequest {
    public ReminderProfilesListQueryParams queryParams;
    public ReminderProfilesListRequest withQueryParams(ReminderProfilesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ReminderProfilesListSecurity security;
    public ReminderProfilesListRequest withSecurity(ReminderProfilesListSecurity security) {
        this.security = security;
        return this;
    }
}