package openapisdk.models.operations;



public class ReminderProfilesCreateResponse {
    public String contentType;
    public ReminderProfilesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ReminderProfile reminderProfile;
    public ReminderProfilesCreateResponse withReminderProfile(openapisdk.models.shared.ReminderProfile reminderProfile) {
        this.reminderProfile = reminderProfile;
        return this;
    }
    public Long statusCode;
    public ReminderProfilesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}