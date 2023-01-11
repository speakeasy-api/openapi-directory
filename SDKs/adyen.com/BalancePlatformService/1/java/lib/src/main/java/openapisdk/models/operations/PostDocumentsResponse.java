package openapisdk.models.operations;



public class PostDocumentsResponse {
    public String contentType;
    public PostDocumentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object document;
    public PostDocumentsResponse withDocument(Object document) {
        this.document = document;
        return this;
    }
    public Object serviceError;
    public PostDocumentsResponse withServiceError(Object serviceError) {
        this.serviceError = serviceError;
        return this;
    }
    public Long statusCode;
    public PostDocumentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}