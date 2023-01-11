package openapisdk.models.operations;



public class DeleteChannelResponse {
    public Object accessDeniedException;
    public DeleteChannelResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public DeleteChannelResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public DeleteChannelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object pendingVerification;
    public DeleteChannelResponse withPendingVerification(Object pendingVerification) {
        this.pendingVerification = pendingVerification;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteChannelResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteChannelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DeleteChannelResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}