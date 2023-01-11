package openapisdk.models.operations;



public class DeleteSecurityConfigurationResponse {
    public String contentType;
    public DeleteSecurityConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteSecurityConfigurationResponse;
    public DeleteSecurityConfigurationResponse withDeleteSecurityConfigurationResponse(java.util.Map<String, Object> deleteSecurityConfigurationResponse) {
        this.deleteSecurityConfigurationResponse = deleteSecurityConfigurationResponse;
        return this;
    }
    public Object entityNotFoundException;
    public DeleteSecurityConfigurationResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public Object internalServiceException;
    public DeleteSecurityConfigurationResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public DeleteSecurityConfigurationResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public DeleteSecurityConfigurationResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public DeleteSecurityConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}