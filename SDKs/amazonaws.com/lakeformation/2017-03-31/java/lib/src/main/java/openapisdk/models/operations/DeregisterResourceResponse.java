package openapisdk.models.operations;



public class DeregisterResourceResponse {
    public String contentType;
    public DeregisterResourceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deregisterResourceResponse;
    public DeregisterResourceResponse withDeregisterResourceResponse(java.util.Map<String, Object> deregisterResourceResponse) {
        this.deregisterResourceResponse = deregisterResourceResponse;
        return this;
    }
    public Object entityNotFoundException;
    public DeregisterResourceResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public Object internalServiceException;
    public DeregisterResourceResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public DeregisterResourceResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public DeregisterResourceResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public DeregisterResourceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}