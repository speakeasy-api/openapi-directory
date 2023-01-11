package openapisdk.models.operations;



public class ReminderProfilesPartialUpdateRequest {
    public ReminderProfilesPartialUpdatePathParams pathParams;
    public ReminderProfilesPartialUpdateRequest withPathParams(ReminderProfilesPartialUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ReminderProfilesPartialUpdateQueryParams queryParams;
    public ReminderProfilesPartialUpdateRequest withQueryParams(ReminderProfilesPartialUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ReminderProfilesPartialUpdateSecurity security;
    public ReminderProfilesPartialUpdateRequest withSecurity(ReminderProfilesPartialUpdateSecurity security) {
        this.security = security;
        return this;
    }
}