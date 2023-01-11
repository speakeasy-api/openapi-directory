package openapisdk.models.operations;



public class StartDeploymentResponse {
    public String contentType;
    public StartDeploymentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceErrorException;
    public StartDeploymentResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public Object invalidRequestException;
    public StartDeploymentResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public StartDeploymentResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public openapisdk.models.shared.StartDeploymentResponse startDeploymentResponse;
    public StartDeploymentResponse withStartDeploymentResponse(openapisdk.models.shared.StartDeploymentResponse startDeploymentResponse) {
        this.startDeploymentResponse = startDeploymentResponse;
        return this;
    }
    public Long statusCode;
    public StartDeploymentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}