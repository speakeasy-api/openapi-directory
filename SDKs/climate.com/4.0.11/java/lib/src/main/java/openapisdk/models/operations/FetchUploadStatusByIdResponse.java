package openapisdk.models.operations;



public class FetchUploadStatusByIdResponse {
    public String contentType;
    public FetchUploadStatusByIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public FetchUploadStatusByIdResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public FetchUploadStatusByIdResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public FetchUploadStatusByIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UploadStatus uploadStatus;
    public FetchUploadStatusByIdResponse withUploadStatus(openapisdk.models.shared.UploadStatus uploadStatus) {
        this.uploadStatus = uploadStatus;
        return this;
    }
}