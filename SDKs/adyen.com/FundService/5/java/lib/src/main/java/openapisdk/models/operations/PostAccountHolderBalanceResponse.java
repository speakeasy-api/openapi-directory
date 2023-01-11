package openapisdk.models.operations;



public class PostAccountHolderBalanceResponse {
    public Object accountHolderBalanceResponse;
    public PostAccountHolderBalanceResponse withAccountHolderBalanceResponse(Object accountHolderBalanceResponse) {
        this.accountHolderBalanceResponse = accountHolderBalanceResponse;
        return this;
    }
    public String contentType;
    public PostAccountHolderBalanceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object serviceError;
    public PostAccountHolderBalanceResponse withServiceError(Object serviceError) {
        this.serviceError = serviceError;
        return this;
    }
    public Long statusCode;
    public PostAccountHolderBalanceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}