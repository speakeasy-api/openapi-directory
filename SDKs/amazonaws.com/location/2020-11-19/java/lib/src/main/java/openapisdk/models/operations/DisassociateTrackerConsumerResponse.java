package openapisdk.models.operations;



public class DisassociateTrackerConsumerResponse {
    public Object accessDeniedException;
    public DisassociateTrackerConsumerResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DisassociateTrackerConsumerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> disassociateTrackerConsumerResponse;
    public DisassociateTrackerConsumerResponse withDisassociateTrackerConsumerResponse(java.util.Map<String, Object> disassociateTrackerConsumerResponse) {
        this.disassociateTrackerConsumerResponse = disassociateTrackerConsumerResponse;
        return this;
    }
    public Object internalServerException;
    public DisassociateTrackerConsumerResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DisassociateTrackerConsumerResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DisassociateTrackerConsumerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DisassociateTrackerConsumerResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DisassociateTrackerConsumerResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}