package openapisdk.models.operations;



public class DeleteSignalingChannelResponse {
    public Object accessDeniedException;
    public DeleteSignalingChannelResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object clientLimitExceededException;
    public DeleteSignalingChannelResponse withClientLimitExceededException(Object clientLimitExceededException) {
        this.clientLimitExceededException = clientLimitExceededException;
        return this;
    }
    public String contentType;
    public DeleteSignalingChannelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteSignalingChannelOutput;
    public DeleteSignalingChannelResponse withDeleteSignalingChannelOutput(java.util.Map<String, Object> deleteSignalingChannelOutput) {
        this.deleteSignalingChannelOutput = deleteSignalingChannelOutput;
        return this;
    }
    public Object invalidArgumentException;
    public DeleteSignalingChannelResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Object resourceInUseException;
    public DeleteSignalingChannelResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteSignalingChannelResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteSignalingChannelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object versionMismatchException;
    public DeleteSignalingChannelResponse withVersionMismatchException(Object versionMismatchException) {
        this.versionMismatchException = versionMismatchException;
        return this;
    }
}