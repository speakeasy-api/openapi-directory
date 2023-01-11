package openapisdk.models.operations;



public class PostCreateAccountResponse {
    public String contentType;
    public PostCreateAccountResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object createAccountResponse;
    public PostCreateAccountResponse withCreateAccountResponse(Object createAccountResponse) {
        this.createAccountResponse = createAccountResponse;
        return this;
    }
    public Object serviceError;
    public PostCreateAccountResponse withServiceError(Object serviceError) {
        this.serviceError = serviceError;
        return this;
    }
    public Long statusCode;
    public PostCreateAccountResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}