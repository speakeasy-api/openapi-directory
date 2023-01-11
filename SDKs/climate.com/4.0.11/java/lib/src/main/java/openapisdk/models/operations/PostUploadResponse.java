package openapisdk.models.operations;



public class PostUploadResponse {
    public String contentType;
    public PostUploadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public String createdUpload;
    public PostUploadResponse withCreatedUpload(String createdUpload) {
        this.createdUpload = createdUpload;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public PostUploadResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PostUploadResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PostUploadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}