package openapisdk.models.operations;



public class ActivityListPublicOrgEventsResponse {
    public String contentType;
    public ActivityListPublicOrgEventsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ActivityListPublicOrgEventsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Event[] events;
    public ActivityListPublicOrgEventsResponse withEvents(openapisdk.models.shared.Event[] events) {
        this.events = events;
        return this;
    }
}