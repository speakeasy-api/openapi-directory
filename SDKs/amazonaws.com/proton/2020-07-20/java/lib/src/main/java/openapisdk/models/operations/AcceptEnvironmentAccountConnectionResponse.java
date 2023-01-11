package openapisdk.models.operations;



public class AcceptEnvironmentAccountConnectionResponse {
    public openapisdk.models.shared.AcceptEnvironmentAccountConnectionOutput acceptEnvironmentAccountConnectionOutput;
    public AcceptEnvironmentAccountConnectionResponse withAcceptEnvironmentAccountConnectionOutput(openapisdk.models.shared.AcceptEnvironmentAccountConnectionOutput acceptEnvironmentAccountConnectionOutput) {
        this.acceptEnvironmentAccountConnectionOutput = acceptEnvironmentAccountConnectionOutput;
        return this;
    }
    public Object accessDeniedException;
    public AcceptEnvironmentAccountConnectionResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public AcceptEnvironmentAccountConnectionResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public AcceptEnvironmentAccountConnectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public AcceptEnvironmentAccountConnectionResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public AcceptEnvironmentAccountConnectionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public AcceptEnvironmentAccountConnectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public AcceptEnvironmentAccountConnectionResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public AcceptEnvironmentAccountConnectionResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}