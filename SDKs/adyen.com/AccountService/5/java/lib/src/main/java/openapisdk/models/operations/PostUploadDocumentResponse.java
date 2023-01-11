package openapisdk.models.operations;



public class PostUploadDocumentResponse {
    public String contentType;
    public PostUploadDocumentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object serviceError;
    public PostUploadDocumentResponse withServiceError(Object serviceError) {
        this.serviceError = serviceError;
        return this;
    }
    public Long statusCode;
    public PostUploadDocumentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object updateAccountHolderResponse;
    public PostUploadDocumentResponse withUpdateAccountHolderResponse(Object updateAccountHolderResponse) {
        this.updateAccountHolderResponse = updateAccountHolderResponse;
        return this;
    }
}