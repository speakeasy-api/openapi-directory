package openapisdk.models.operations;



public class GetV4LayersAsAppliedActivityIdContentsResponse {
    public byte[] body;
    public GetV4LayersAsAppliedActivityIdContentsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetV4LayersAsAppliedActivityIdContentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> empty;
    public GetV4LayersAsAppliedActivityIdContentsResponse withEmpty(java.util.Map<String, Object> empty) {
        this.empty = empty;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetV4LayersAsAppliedActivityIdContentsResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetV4LayersAsAppliedActivityIdContentsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetV4LayersAsAppliedActivityIdContentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}