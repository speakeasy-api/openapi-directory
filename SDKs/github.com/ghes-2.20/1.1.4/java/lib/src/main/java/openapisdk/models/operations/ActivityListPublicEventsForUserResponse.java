package openapisdk.models.operations;



public class ActivityListPublicEventsForUserResponse {
    public String contentType;
    public ActivityListPublicEventsForUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ActivityListPublicEventsForUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Event[] events;
    public ActivityListPublicEventsForUserResponse withEvents(openapisdk.models.shared.Event[] events) {
        this.events = events;
        return this;
    }
}