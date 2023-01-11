package openapisdk.models.operations;



public class PostCreateAccountHolderResponse {
    public String contentType;
    public PostCreateAccountHolderResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object createAccountHolderResponse;
    public PostCreateAccountHolderResponse withCreateAccountHolderResponse(Object createAccountHolderResponse) {
        this.createAccountHolderResponse = createAccountHolderResponse;
        return this;
    }
    public Object serviceError;
    public PostCreateAccountHolderResponse withServiceError(Object serviceError) {
        this.serviceError = serviceError;
        return this;
    }
    public Long statusCode;
    public PostCreateAccountHolderResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}