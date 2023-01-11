package openapisdk.models.operations;



public class CancelServicePipelineDeploymentResponse {
    public Object accessDeniedException;
    public CancelServicePipelineDeploymentResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public openapisdk.models.shared.CancelServicePipelineDeploymentOutput cancelServicePipelineDeploymentOutput;
    public CancelServicePipelineDeploymentResponse withCancelServicePipelineDeploymentOutput(openapisdk.models.shared.CancelServicePipelineDeploymentOutput cancelServicePipelineDeploymentOutput) {
        this.cancelServicePipelineDeploymentOutput = cancelServicePipelineDeploymentOutput;
        return this;
    }
    public Object conflictException;
    public CancelServicePipelineDeploymentResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public CancelServicePipelineDeploymentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public CancelServicePipelineDeploymentResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public CancelServicePipelineDeploymentResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public CancelServicePipelineDeploymentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CancelServicePipelineDeploymentResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public CancelServicePipelineDeploymentResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}