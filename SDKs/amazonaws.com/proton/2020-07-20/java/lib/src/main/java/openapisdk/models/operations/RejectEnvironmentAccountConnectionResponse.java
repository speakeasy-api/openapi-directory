package openapisdk.models.operations;



public class RejectEnvironmentAccountConnectionResponse {
    public Object accessDeniedException;
    public RejectEnvironmentAccountConnectionResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public RejectEnvironmentAccountConnectionResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public RejectEnvironmentAccountConnectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public RejectEnvironmentAccountConnectionResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.RejectEnvironmentAccountConnectionOutput rejectEnvironmentAccountConnectionOutput;
    public RejectEnvironmentAccountConnectionResponse withRejectEnvironmentAccountConnectionOutput(openapisdk.models.shared.RejectEnvironmentAccountConnectionOutput rejectEnvironmentAccountConnectionOutput) {
        this.rejectEnvironmentAccountConnectionOutput = rejectEnvironmentAccountConnectionOutput;
        return this;
    }
    public Object resourceNotFoundException;
    public RejectEnvironmentAccountConnectionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public RejectEnvironmentAccountConnectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public RejectEnvironmentAccountConnectionResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public RejectEnvironmentAccountConnectionResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}