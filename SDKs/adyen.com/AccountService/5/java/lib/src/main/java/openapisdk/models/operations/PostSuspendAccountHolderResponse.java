package openapisdk.models.operations;



public class PostSuspendAccountHolderResponse {
    public String contentType;
    public PostSuspendAccountHolderResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object serviceError;
    public PostSuspendAccountHolderResponse withServiceError(Object serviceError) {
        this.serviceError = serviceError;
        return this;
    }
    public Long statusCode;
    public PostSuspendAccountHolderResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object suspendAccountHolderResponse;
    public PostSuspendAccountHolderResponse withSuspendAccountHolderResponse(Object suspendAccountHolderResponse) {
        this.suspendAccountHolderResponse = suspendAccountHolderResponse;
        return this;
    }
}