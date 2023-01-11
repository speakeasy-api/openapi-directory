package openapisdk.models.operations;



public class ActivityListRepoEventsResponse {
    public String contentType;
    public ActivityListRepoEventsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ActivityListRepoEventsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Event[] events;
    public ActivityListRepoEventsResponse withEvents(openapisdk.models.shared.Event[] events) {
        this.events = events;
        return this;
    }
}