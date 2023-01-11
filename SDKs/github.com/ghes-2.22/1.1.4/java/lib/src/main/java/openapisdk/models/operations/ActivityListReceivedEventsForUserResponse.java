package openapisdk.models.operations;



public class ActivityListReceivedEventsForUserResponse {
    public String contentType;
    public ActivityListReceivedEventsForUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ActivityListReceivedEventsForUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Event[] events;
    public ActivityListReceivedEventsForUserResponse withEvents(openapisdk.models.shared.Event[] events) {
        this.events = events;
        return this;
    }
}