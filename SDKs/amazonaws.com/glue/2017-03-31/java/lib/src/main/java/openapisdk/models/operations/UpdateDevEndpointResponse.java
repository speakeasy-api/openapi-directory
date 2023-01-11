package openapisdk.models.operations;



public class UpdateDevEndpointResponse {
    public String contentType;
    public UpdateDevEndpointResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public UpdateDevEndpointResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public Object internalServiceException;
    public UpdateDevEndpointResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public UpdateDevEndpointResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public UpdateDevEndpointResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public UpdateDevEndpointResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> updateDevEndpointResponse;
    public UpdateDevEndpointResponse withUpdateDevEndpointResponse(java.util.Map<String, Object> updateDevEndpointResponse) {
        this.updateDevEndpointResponse = updateDevEndpointResponse;
        return this;
    }
    public Object validationException;
    public UpdateDevEndpointResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}