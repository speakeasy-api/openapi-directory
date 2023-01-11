package openapisdk.models.operations;



public class ActivityListOrgEventsForAuthenticatedUserResponse {
    public String contentType;
    public ActivityListOrgEventsForAuthenticatedUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ActivityListOrgEventsForAuthenticatedUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Event[] events;
    public ActivityListOrgEventsForAuthenticatedUserResponse withEvents(openapisdk.models.shared.Event[] events) {
        this.events = events;
        return this;
    }
}