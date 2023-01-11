package openapisdk.models.operations;



public class DeleteEnvironmentAccountConnectionResponse {
    public Object accessDeniedException;
    public DeleteEnvironmentAccountConnectionResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public DeleteEnvironmentAccountConnectionResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public DeleteEnvironmentAccountConnectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteEnvironmentAccountConnectionOutput deleteEnvironmentAccountConnectionOutput;
    public DeleteEnvironmentAccountConnectionResponse withDeleteEnvironmentAccountConnectionOutput(openapisdk.models.shared.DeleteEnvironmentAccountConnectionOutput deleteEnvironmentAccountConnectionOutput) {
        this.deleteEnvironmentAccountConnectionOutput = deleteEnvironmentAccountConnectionOutput;
        return this;
    }
    public Object internalServerException;
    public DeleteEnvironmentAccountConnectionResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteEnvironmentAccountConnectionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteEnvironmentAccountConnectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DeleteEnvironmentAccountConnectionResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DeleteEnvironmentAccountConnectionResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}