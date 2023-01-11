package openapisdk.models.operations;



public class CreateDeploymentResponse {
    public Object accessDeniedException;
    public CreateDeploymentResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public CreateDeploymentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateDeploymentResponse createDeploymentResponse;
    public CreateDeploymentResponse withCreateDeploymentResponse(openapisdk.models.shared.CreateDeploymentResponse createDeploymentResponse) {
        this.createDeploymentResponse = createDeploymentResponse;
        return this;
    }
    public Object internalServerException;
    public CreateDeploymentResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object requestAlreadyInProgressException;
    public CreateDeploymentResponse withRequestAlreadyInProgressException(Object requestAlreadyInProgressException) {
        this.requestAlreadyInProgressException = requestAlreadyInProgressException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateDeploymentResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public CreateDeploymentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CreateDeploymentResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public CreateDeploymentResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}