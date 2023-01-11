package openapisdk.models.operations;



public class UpdateSignalingChannelResponse {
    public Object accessDeniedException;
    public UpdateSignalingChannelResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object clientLimitExceededException;
    public UpdateSignalingChannelResponse withClientLimitExceededException(Object clientLimitExceededException) {
        this.clientLimitExceededException = clientLimitExceededException;
        return this;
    }
    public String contentType;
    public UpdateSignalingChannelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidArgumentException;
    public UpdateSignalingChannelResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Object resourceInUseException;
    public UpdateSignalingChannelResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateSignalingChannelResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateSignalingChannelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> updateSignalingChannelOutput;
    public UpdateSignalingChannelResponse withUpdateSignalingChannelOutput(java.util.Map<String, Object> updateSignalingChannelOutput) {
        this.updateSignalingChannelOutput = updateSignalingChannelOutput;
        return this;
    }
    public Object versionMismatchException;
    public UpdateSignalingChannelResponse withVersionMismatchException(Object versionMismatchException) {
        this.versionMismatchException = versionMismatchException;
        return this;
    }
}