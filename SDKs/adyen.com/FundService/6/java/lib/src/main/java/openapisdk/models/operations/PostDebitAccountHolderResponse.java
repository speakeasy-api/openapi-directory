package openapisdk.models.operations;



public class PostDebitAccountHolderResponse {
    public String contentType;
    public PostDebitAccountHolderResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object debitAccountHolderResponse;
    public PostDebitAccountHolderResponse withDebitAccountHolderResponse(Object debitAccountHolderResponse) {
        this.debitAccountHolderResponse = debitAccountHolderResponse;
        return this;
    }
    public Object serviceError;
    public PostDebitAccountHolderResponse withServiceError(Object serviceError) {
        this.serviceError = serviceError;
        return this;
    }
    public Long statusCode;
    public PostDebitAccountHolderResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}