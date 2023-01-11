package openapisdk.models.operations;



public class ReminderProfilesReadRequest {
    public ReminderProfilesReadPathParams pathParams;
    public ReminderProfilesReadRequest withPathParams(ReminderProfilesReadPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ReminderProfilesReadQueryParams queryParams;
    public ReminderProfilesReadRequest withQueryParams(ReminderProfilesReadQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ReminderProfilesReadSecurity security;
    public ReminderProfilesReadRequest withSecurity(ReminderProfilesReadSecurity security) {
        this.security = security;
        return this;
    }
}