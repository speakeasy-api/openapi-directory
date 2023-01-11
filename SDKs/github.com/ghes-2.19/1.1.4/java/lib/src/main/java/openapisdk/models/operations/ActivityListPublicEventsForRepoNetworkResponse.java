package openapisdk.models.operations;



public class ActivityListPublicEventsForRepoNetworkResponse {
    public String contentType;
    public ActivityListPublicEventsForRepoNetworkResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ActivityListPublicEventsForRepoNetworkResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public ActivityListPublicEventsForRepoNetworkResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.Event[] events;
    public ActivityListPublicEventsForRepoNetworkResponse withEvents(openapisdk.models.shared.Event[] events) {
        this.events = events;
        return this;
    }
}