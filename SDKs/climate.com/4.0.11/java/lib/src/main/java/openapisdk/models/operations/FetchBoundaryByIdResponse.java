package openapisdk.models.operations;



public class FetchBoundaryByIdResponse {
    public Object boundary;
    public FetchBoundaryByIdResponse withBoundary(Object boundary) {
        this.boundary = boundary;
        return this;
    }
    public String contentType;
    public FetchBoundaryByIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public FetchBoundaryByIdResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public FetchBoundaryByIdResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public FetchBoundaryByIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}