package openapisdk.models.operations;



public class FetchUploadStatusesResponse {
    public String contentType;
    public FetchUploadStatusesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public FetchUploadStatusesResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public FetchUploadStatusesResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public FetchUploadStatusesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UploadStatuses uploadStatuses;
    public FetchUploadStatusesResponse withUploadStatuses(openapisdk.models.shared.UploadStatuses uploadStatuses) {
        this.uploadStatuses = uploadStatuses;
        return this;
    }
}