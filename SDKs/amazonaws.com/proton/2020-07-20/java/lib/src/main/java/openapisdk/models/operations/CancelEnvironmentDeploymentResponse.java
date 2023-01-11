package openapisdk.models.operations;



public class CancelEnvironmentDeploymentResponse {
    public Object accessDeniedException;
    public CancelEnvironmentDeploymentResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public openapisdk.models.shared.CancelEnvironmentDeploymentOutput cancelEnvironmentDeploymentOutput;
    public CancelEnvironmentDeploymentResponse withCancelEnvironmentDeploymentOutput(openapisdk.models.shared.CancelEnvironmentDeploymentOutput cancelEnvironmentDeploymentOutput) {
        this.cancelEnvironmentDeploymentOutput = cancelEnvironmentDeploymentOutput;
        return this;
    }
    public Object conflictException;
    public CancelEnvironmentDeploymentResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public CancelEnvironmentDeploymentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public CancelEnvironmentDeploymentResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public CancelEnvironmentDeploymentResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public CancelEnvironmentDeploymentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CancelEnvironmentDeploymentResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public CancelEnvironmentDeploymentResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}