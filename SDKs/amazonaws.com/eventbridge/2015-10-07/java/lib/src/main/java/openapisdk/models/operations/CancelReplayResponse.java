package openapisdk.models.operations;



public class CancelReplayResponse {
    public openapisdk.models.shared.CancelReplayResponse cancelReplayResponse;
    public CancelReplayResponse withCancelReplayResponse(openapisdk.models.shared.CancelReplayResponse cancelReplayResponse) {
        this.cancelReplayResponse = cancelReplayResponse;
        return this;
    }
    public Object concurrentModificationException;
    public CancelReplayResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public CancelReplayResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object illegalStatusException;
    public CancelReplayResponse withIllegalStatusException(Object illegalStatusException) {
        this.illegalStatusException = illegalStatusException;
        return this;
    }
    public Object internalException;
    public CancelReplayResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object resourceNotFoundException;
    public CancelReplayResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public CancelReplayResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}