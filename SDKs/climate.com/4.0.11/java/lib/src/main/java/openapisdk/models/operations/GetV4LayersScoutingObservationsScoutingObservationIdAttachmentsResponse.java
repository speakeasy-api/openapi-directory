package openapisdk.models.operations;



public class GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsResponse {
    public String contentType;
    public GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> empty;
    public GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsResponse withEmpty(java.util.Map<String, Object> empty) {
        this.empty = empty;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Object scoutingObservationAttachments;
    public GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsResponse withScoutingObservationAttachments(Object scoutingObservationAttachments) {
        this.scoutingObservationAttachments = scoutingObservationAttachments;
        return this;
    }
    public Long statusCode;
    public GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}