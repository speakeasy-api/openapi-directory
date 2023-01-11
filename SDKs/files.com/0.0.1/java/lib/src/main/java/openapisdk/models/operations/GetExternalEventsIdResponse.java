package openapisdk.models.operations;



public class GetExternalEventsIdResponse {
    public String contentType;
    public GetExternalEventsIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ExternalEventEntity externalEventEntity;
    public GetExternalEventsIdResponse withExternalEventEntity(openapisdk.models.shared.ExternalEventEntity externalEventEntity) {
        this.externalEventEntity = externalEventEntity;
        return this;
    }
    public Long statusCode;
    public GetExternalEventsIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}