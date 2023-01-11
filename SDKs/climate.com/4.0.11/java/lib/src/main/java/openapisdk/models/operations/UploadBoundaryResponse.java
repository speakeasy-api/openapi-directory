package openapisdk.models.operations;



public class UploadBoundaryResponse {
    public String contentType;
    public UploadBoundaryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public UploadBoundaryResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public UploadBoundaryResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public UploadBoundaryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object uploadedBoundaryId;
    public UploadBoundaryResponse withUploadedBoundaryId(Object uploadedBoundaryId) {
        this.uploadedBoundaryId = uploadedBoundaryId;
        return this;
    }
}