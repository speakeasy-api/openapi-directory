package openapisdk.models.operations;



public class DeleteSubscriptionResponse {
    public String contentType;
    public DeleteSubscriptionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteSubscriptionResponse;
    public DeleteSubscriptionResponse withDeleteSubscriptionResponse(java.util.Map<String, Object> deleteSubscriptionResponse) {
        this.deleteSubscriptionResponse = deleteSubscriptionResponse;
        return this;
    }
    public Object internalErrorException;
    public DeleteSubscriptionResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object lockedSubscriptionException;
    public DeleteSubscriptionResponse withLockedSubscriptionException(Object lockedSubscriptionException) {
        this.lockedSubscriptionException = lockedSubscriptionException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteSubscriptionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteSubscriptionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}