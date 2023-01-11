package openapisdk.models.operations;



public class DeleteHumanLoopResponse {
    public String contentType;
    public DeleteHumanLoopResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteHumanLoopResponse;
    public DeleteHumanLoopResponse withDeleteHumanLoopResponse(java.util.Map<String, Object> deleteHumanLoopResponse) {
        this.deleteHumanLoopResponse = deleteHumanLoopResponse;
        return this;
    }
    public Object internalServerException;
    public DeleteHumanLoopResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteHumanLoopResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteHumanLoopResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DeleteHumanLoopResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DeleteHumanLoopResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}