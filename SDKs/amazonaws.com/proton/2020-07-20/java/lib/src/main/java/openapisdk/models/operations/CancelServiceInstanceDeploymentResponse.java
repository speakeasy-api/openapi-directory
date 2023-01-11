package openapisdk.models.operations;



public class CancelServiceInstanceDeploymentResponse {
    public Object accessDeniedException;
    public CancelServiceInstanceDeploymentResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public openapisdk.models.shared.CancelServiceInstanceDeploymentOutput cancelServiceInstanceDeploymentOutput;
    public CancelServiceInstanceDeploymentResponse withCancelServiceInstanceDeploymentOutput(openapisdk.models.shared.CancelServiceInstanceDeploymentOutput cancelServiceInstanceDeploymentOutput) {
        this.cancelServiceInstanceDeploymentOutput = cancelServiceInstanceDeploymentOutput;
        return this;
    }
    public Object conflictException;
    public CancelServiceInstanceDeploymentResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public CancelServiceInstanceDeploymentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public CancelServiceInstanceDeploymentResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public CancelServiceInstanceDeploymentResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public CancelServiceInstanceDeploymentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CancelServiceInstanceDeploymentResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public CancelServiceInstanceDeploymentResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}