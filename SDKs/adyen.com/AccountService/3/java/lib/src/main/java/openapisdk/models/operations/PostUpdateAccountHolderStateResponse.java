package openapisdk.models.operations;



public class PostUpdateAccountHolderStateResponse {
    public String contentType;
    public PostUpdateAccountHolderStateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object getAccountHolderStatusResponse;
    public PostUpdateAccountHolderStateResponse withGetAccountHolderStatusResponse(Object getAccountHolderStatusResponse) {
        this.getAccountHolderStatusResponse = getAccountHolderStatusResponse;
        return this;
    }
    public Object serviceError;
    public PostUpdateAccountHolderStateResponse withServiceError(Object serviceError) {
        this.serviceError = serviceError;
        return this;
    }
    public Long statusCode;
    public PostUpdateAccountHolderStateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}