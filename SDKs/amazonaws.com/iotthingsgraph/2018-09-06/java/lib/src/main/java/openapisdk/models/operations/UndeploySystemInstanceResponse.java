package openapisdk.models.operations;



public class UndeploySystemInstanceResponse {
    public String contentType;
    public UndeploySystemInstanceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public UndeploySystemInstanceResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public UndeploySystemInstanceResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceInUseException;
    public UndeploySystemInstanceResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public UndeploySystemInstanceResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UndeploySystemInstanceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public UndeploySystemInstanceResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public openapisdk.models.shared.UndeploySystemInstanceResponse undeploySystemInstanceResponse;
    public UndeploySystemInstanceResponse withUndeploySystemInstanceResponse(openapisdk.models.shared.UndeploySystemInstanceResponse undeploySystemInstanceResponse) {
        this.undeploySystemInstanceResponse = undeploySystemInstanceResponse;
        return this;
    }
}