package openapisdk.models.operations;



public class GetDeploymentResponse {
    public Object accessDeniedException;
    public GetDeploymentResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetDeploymentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetDeploymentResponse getDeploymentResponse;
    public GetDeploymentResponse withGetDeploymentResponse(openapisdk.models.shared.GetDeploymentResponse getDeploymentResponse) {
        this.getDeploymentResponse = getDeploymentResponse;
        return this;
    }
    public Object internalServerException;
    public GetDeploymentResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetDeploymentResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetDeploymentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetDeploymentResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public GetDeploymentResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}