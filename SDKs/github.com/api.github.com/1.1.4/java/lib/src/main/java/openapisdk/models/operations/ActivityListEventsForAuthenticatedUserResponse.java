package openapisdk.models.operations;



public class ActivityListEventsForAuthenticatedUserResponse {
    public String contentType;
    public ActivityListEventsForAuthenticatedUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ActivityListEventsForAuthenticatedUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Event[] events;
    public ActivityListEventsForAuthenticatedUserResponse withEvents(openapisdk.models.shared.Event[] events) {
        this.events = events;
        return this;
    }
}