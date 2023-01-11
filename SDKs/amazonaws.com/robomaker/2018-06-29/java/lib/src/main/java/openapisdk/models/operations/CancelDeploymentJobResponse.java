package openapisdk.models.operations;



public class CancelDeploymentJobResponse {
    public java.util.Map<String, Object> cancelDeploymentJobResponse;
    public CancelDeploymentJobResponse withCancelDeploymentJobResponse(java.util.Map<String, Object> cancelDeploymentJobResponse) {
        this.cancelDeploymentJobResponse = cancelDeploymentJobResponse;
        return this;
    }
    public String contentType;
    public CancelDeploymentJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public CancelDeploymentJobResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidParameterException;
    public CancelDeploymentJobResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object resourceNotFoundException;
    public CancelDeploymentJobResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public CancelDeploymentJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CancelDeploymentJobResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}