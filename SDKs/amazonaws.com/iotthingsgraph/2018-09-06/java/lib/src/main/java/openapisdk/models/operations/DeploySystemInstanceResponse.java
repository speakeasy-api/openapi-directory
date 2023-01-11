package openapisdk.models.operations;



public class DeploySystemInstanceResponse {
    public String contentType;
    public DeploySystemInstanceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeploySystemInstanceResponse deploySystemInstanceResponse;
    public DeploySystemInstanceResponse withDeploySystemInstanceResponse(openapisdk.models.shared.DeploySystemInstanceResponse deploySystemInstanceResponse) {
        this.deploySystemInstanceResponse = deploySystemInstanceResponse;
        return this;
    }
    public Object internalFailureException;
    public DeploySystemInstanceResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public DeploySystemInstanceResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceInUseException;
    public DeploySystemInstanceResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeploySystemInstanceResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeploySystemInstanceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DeploySystemInstanceResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}