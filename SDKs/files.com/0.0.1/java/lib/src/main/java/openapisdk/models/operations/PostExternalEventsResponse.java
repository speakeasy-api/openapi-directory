package openapisdk.models.operations;



public class PostExternalEventsResponse {
    public String contentType;
    public PostExternalEventsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ExternalEventEntity externalEventEntity;
    public PostExternalEventsResponse withExternalEventEntity(openapisdk.models.shared.ExternalEventEntity externalEventEntity) {
        this.externalEventEntity = externalEventEntity;
        return this;
    }
    public Long statusCode;
    public PostExternalEventsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}