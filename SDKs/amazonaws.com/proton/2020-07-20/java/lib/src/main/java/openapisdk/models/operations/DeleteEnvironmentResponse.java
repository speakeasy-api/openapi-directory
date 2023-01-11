package openapisdk.models.operations;



public class DeleteEnvironmentResponse {
    public Object accessDeniedException;
    public DeleteEnvironmentResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public DeleteEnvironmentResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public DeleteEnvironmentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteEnvironmentOutput deleteEnvironmentOutput;
    public DeleteEnvironmentResponse withDeleteEnvironmentOutput(openapisdk.models.shared.DeleteEnvironmentOutput deleteEnvironmentOutput) {
        this.deleteEnvironmentOutput = deleteEnvironmentOutput;
        return this;
    }
    public Object internalServerException;
    public DeleteEnvironmentResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteEnvironmentResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteEnvironmentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DeleteEnvironmentResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DeleteEnvironmentResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}