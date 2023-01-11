package openapisdk.models.operations;



public class ReminderProfilesListResponse {
    public String contentType;
    public ReminderProfilesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReminderProfilesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ReminderProfilesList200ApplicationJson reminderProfilesList200ApplicationJSONObject;
    public ReminderProfilesListResponse withReminderProfilesList200ApplicationJsonObject(ReminderProfilesList200ApplicationJson reminderProfilesList200ApplicationJSONObject) {
        this.reminderProfilesList200ApplicationJSONObject = reminderProfilesList200ApplicationJSONObject;
        return this;
    }
}