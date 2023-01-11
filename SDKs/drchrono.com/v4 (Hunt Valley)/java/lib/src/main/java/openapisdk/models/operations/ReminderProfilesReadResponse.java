package openapisdk.models.operations;



public class ReminderProfilesReadResponse {
    public String contentType;
    public ReminderProfilesReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ReminderProfile reminderProfile;
    public ReminderProfilesReadResponse withReminderProfile(openapisdk.models.shared.ReminderProfile reminderProfile) {
        this.reminderProfile = reminderProfile;
        return this;
    }
    public Long statusCode;
    public ReminderProfilesReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}