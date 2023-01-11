package openapisdk.models.operations;



public class GetExternalEventsResponse {
    public String contentType;
    public GetExternalEventsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ExternalEventEntity[] externalEventEntities;
    public GetExternalEventsResponse withExternalEventEntities(openapisdk.models.shared.ExternalEventEntity[] externalEventEntities) {
        this.externalEventEntities = externalEventEntities;
        return this;
    }
    public Long statusCode;
    public GetExternalEventsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}