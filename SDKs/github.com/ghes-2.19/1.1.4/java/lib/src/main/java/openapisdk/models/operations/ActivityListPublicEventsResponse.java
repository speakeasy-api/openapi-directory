package openapisdk.models.operations;



public class ActivityListPublicEventsResponse {
    public String contentType;
    public ActivityListPublicEventsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ActivityListPublicEventsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ActivityListPublicEvents503ApplicationJson activityListPublicEvents503ApplicationJSONObject;
    public ActivityListPublicEventsResponse withActivityListPublicEvents503ApplicationJsonObject(ActivityListPublicEvents503ApplicationJson activityListPublicEvents503ApplicationJSONObject) {
        this.activityListPublicEvents503ApplicationJSONObject = activityListPublicEvents503ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public ActivityListPublicEventsResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.Event[] events;
    public ActivityListPublicEventsResponse withEvents(openapisdk.models.shared.Event[] events) {
        this.events = events;
        return this;
    }
}