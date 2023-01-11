package openapisdk.models.operations;



public class UpdateEnvironmentAccountConnectionResponse {
    public Object accessDeniedException;
    public UpdateEnvironmentAccountConnectionResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public UpdateEnvironmentAccountConnectionResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public UpdateEnvironmentAccountConnectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public UpdateEnvironmentAccountConnectionResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateEnvironmentAccountConnectionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateEnvironmentAccountConnectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public UpdateEnvironmentAccountConnectionResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public openapisdk.models.shared.UpdateEnvironmentAccountConnectionOutput updateEnvironmentAccountConnectionOutput;
    public UpdateEnvironmentAccountConnectionResponse withUpdateEnvironmentAccountConnectionOutput(openapisdk.models.shared.UpdateEnvironmentAccountConnectionOutput updateEnvironmentAccountConnectionOutput) {
        this.updateEnvironmentAccountConnectionOutput = updateEnvironmentAccountConnectionOutput;
        return this;
    }
    public Object validationException;
    public UpdateEnvironmentAccountConnectionResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}