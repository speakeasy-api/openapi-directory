package openapisdk.models.operations;



public class GetSecurityConfigurationResponse {
    public String contentType;
    public GetSecurityConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public GetSecurityConfigurationResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public openapisdk.models.shared.GetSecurityConfigurationResponse getSecurityConfigurationResponse;
    public GetSecurityConfigurationResponse withGetSecurityConfigurationResponse(openapisdk.models.shared.GetSecurityConfigurationResponse getSecurityConfigurationResponse) {
        this.getSecurityConfigurationResponse = getSecurityConfigurationResponse;
        return this;
    }
    public Object internalServiceException;
    public GetSecurityConfigurationResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public GetSecurityConfigurationResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public GetSecurityConfigurationResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public GetSecurityConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}