package openapisdk.models.operations;



public class ActivityListReceivedPublicEventsForUserResponse {
    public String contentType;
    public ActivityListReceivedPublicEventsForUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ActivityListReceivedPublicEventsForUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Event[] events;
    public ActivityListReceivedPublicEventsForUserResponse withEvents(openapisdk.models.shared.Event[] events) {
        this.events = events;
        return this;
    }
}