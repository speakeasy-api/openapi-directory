package openapisdk.models.operations;



public class FetchBoundariesResponse {
    public Object boundaries;
    public FetchBoundariesResponse withBoundaries(Object boundaries) {
        this.boundaries = boundaries;
        return this;
    }
    public String contentType;
    public FetchBoundariesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public FetchBoundariesResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public FetchBoundariesResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public FetchBoundariesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}