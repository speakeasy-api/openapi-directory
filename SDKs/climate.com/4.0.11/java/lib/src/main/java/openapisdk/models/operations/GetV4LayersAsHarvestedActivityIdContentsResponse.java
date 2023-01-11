package openapisdk.models.operations;



public class GetV4LayersAsHarvestedActivityIdContentsResponse {
    public byte[] body;
    public GetV4LayersAsHarvestedActivityIdContentsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetV4LayersAsHarvestedActivityIdContentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> empty;
    public GetV4LayersAsHarvestedActivityIdContentsResponse withEmpty(java.util.Map<String, Object> empty) {
        this.empty = empty;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetV4LayersAsHarvestedActivityIdContentsResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetV4LayersAsHarvestedActivityIdContentsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetV4LayersAsHarvestedActivityIdContentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}