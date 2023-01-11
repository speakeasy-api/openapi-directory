package openapisdk.models.operations;



public class PostGetUploadedDocumentsResponse {
    public String contentType;
    public PostGetUploadedDocumentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object getUploadedDocumentsResponse;
    public PostGetUploadedDocumentsResponse withGetUploadedDocumentsResponse(Object getUploadedDocumentsResponse) {
        this.getUploadedDocumentsResponse = getUploadedDocumentsResponse;
        return this;
    }
    public Object serviceError;
    public PostGetUploadedDocumentsResponse withServiceError(Object serviceError) {
        this.serviceError = serviceError;
        return this;
    }
    public Long statusCode;
    public PostGetUploadedDocumentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}