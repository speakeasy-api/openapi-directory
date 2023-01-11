package openapisdk.models.operations;



public class GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsResponse {
    public byte[] body;
    public GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}