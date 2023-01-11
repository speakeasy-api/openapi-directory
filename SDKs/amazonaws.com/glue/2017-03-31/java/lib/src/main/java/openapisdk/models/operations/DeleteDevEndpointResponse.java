package openapisdk.models.operations;



public class DeleteDevEndpointResponse {
    public String contentType;
    public DeleteDevEndpointResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteDevEndpointResponse;
    public DeleteDevEndpointResponse withDeleteDevEndpointResponse(java.util.Map<String, Object> deleteDevEndpointResponse) {
        this.deleteDevEndpointResponse = deleteDevEndpointResponse;
        return this;
    }
    public Object entityNotFoundException;
    public DeleteDevEndpointResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public Object internalServiceException;
    public DeleteDevEndpointResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public DeleteDevEndpointResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public DeleteDevEndpointResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public DeleteDevEndpointResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}