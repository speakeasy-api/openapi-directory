package openapisdk.models.operations;



public class PostUpdateAccountResponse {
    public String contentType;
    public PostUpdateAccountResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object serviceError;
    public PostUpdateAccountResponse withServiceError(Object serviceError) {
        this.serviceError = serviceError;
        return this;
    }
    public Long statusCode;
    public PostUpdateAccountResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object updateAccountResponse;
    public PostUpdateAccountResponse withUpdateAccountResponse(Object updateAccountResponse) {
        this.updateAccountResponse = updateAccountResponse;
        return this;
    }
}