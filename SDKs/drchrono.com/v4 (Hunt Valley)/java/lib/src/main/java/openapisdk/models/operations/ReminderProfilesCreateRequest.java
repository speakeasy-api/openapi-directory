package openapisdk.models.operations;



public class ReminderProfilesCreateRequest {
    public ReminderProfilesCreateQueryParams queryParams;
    public ReminderProfilesCreateRequest withQueryParams(ReminderProfilesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ReminderProfilesCreateSecurity security;
    public ReminderProfilesCreateRequest withSecurity(ReminderProfilesCreateSecurity security) {
        this.security = security;
        return this;
    }
}