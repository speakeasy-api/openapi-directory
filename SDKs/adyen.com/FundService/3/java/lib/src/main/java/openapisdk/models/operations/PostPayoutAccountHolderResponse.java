package openapisdk.models.operations;



public class PostPayoutAccountHolderResponse {
    public String contentType;
    public PostPayoutAccountHolderResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object payoutAccountHolderResponse;
    public PostPayoutAccountHolderResponse withPayoutAccountHolderResponse(Object payoutAccountHolderResponse) {
        this.payoutAccountHolderResponse = payoutAccountHolderResponse;
        return this;
    }
    public Object serviceError;
    public PostPayoutAccountHolderResponse withServiceError(Object serviceError) {
        this.serviceError = serviceError;
        return this;
    }
    public Long statusCode;
    public PostPayoutAccountHolderResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}