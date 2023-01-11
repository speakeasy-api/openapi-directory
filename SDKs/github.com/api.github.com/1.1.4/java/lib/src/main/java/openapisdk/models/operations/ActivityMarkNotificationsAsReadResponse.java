package openapisdk.models.operations;



public class ActivityMarkNotificationsAsReadResponse {
    public String contentType;
    public ActivityMarkNotificationsAsReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ActivityMarkNotificationsAsReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ActivityMarkNotificationsAsRead202ApplicationJson activityMarkNotificationsAsRead202ApplicationJSONObject;
    public ActivityMarkNotificationsAsReadResponse withActivityMarkNotificationsAsRead202ApplicationJsonObject(ActivityMarkNotificationsAsRead202ApplicationJson activityMarkNotificationsAsRead202ApplicationJSONObject) {
        this.activityMarkNotificationsAsRead202ApplicationJSONObject = activityMarkNotificationsAsRead202ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public ActivityMarkNotificationsAsReadResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
}