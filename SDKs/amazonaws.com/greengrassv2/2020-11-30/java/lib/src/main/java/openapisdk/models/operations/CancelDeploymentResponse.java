package openapisdk.models.operations;



public class CancelDeploymentResponse {
    public Object accessDeniedException;
    public CancelDeploymentResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public openapisdk.models.shared.CancelDeploymentResponse cancelDeploymentResponse;
    public CancelDeploymentResponse withCancelDeploymentResponse(openapisdk.models.shared.CancelDeploymentResponse cancelDeploymentResponse) {
        this.cancelDeploymentResponse = cancelDeploymentResponse;
        return this;
    }
    public Object conflictException;
    public CancelDeploymentResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public CancelDeploymentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public CancelDeploymentResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public CancelDeploymentResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public CancelDeploymentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CancelDeploymentResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public CancelDeploymentResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}