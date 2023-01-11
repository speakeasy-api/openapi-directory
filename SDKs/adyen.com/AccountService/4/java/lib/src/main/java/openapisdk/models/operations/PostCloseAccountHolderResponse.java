package openapisdk.models.operations;



public class PostCloseAccountHolderResponse {
    public Object closeAccountHolderResponse;
    public PostCloseAccountHolderResponse withCloseAccountHolderResponse(Object closeAccountHolderResponse) {
        this.closeAccountHolderResponse = closeAccountHolderResponse;
        return this;
    }
    public String contentType;
    public PostCloseAccountHolderResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object serviceError;
    public PostCloseAccountHolderResponse withServiceError(Object serviceError) {
        this.serviceError = serviceError;
        return this;
    }
    public Long statusCode;
    public PostCloseAccountHolderResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}