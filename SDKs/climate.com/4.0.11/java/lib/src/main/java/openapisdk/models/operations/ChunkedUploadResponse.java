package openapisdk.models.operations;



public class ChunkedUploadResponse {
    public String contentType;
    public ChunkedUploadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public ChunkedUploadResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ChunkedUploadResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ChunkedUploadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}