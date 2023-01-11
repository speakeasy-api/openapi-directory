package openapisdk.models.operations;



public class GetSecurityConfigurationsResponse {
    public String contentType;
    public GetSecurityConfigurationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public GetSecurityConfigurationsResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public openapisdk.models.shared.GetSecurityConfigurationsResponse getSecurityConfigurationsResponse;
    public GetSecurityConfigurationsResponse withGetSecurityConfigurationsResponse(openapisdk.models.shared.GetSecurityConfigurationsResponse getSecurityConfigurationsResponse) {
        this.getSecurityConfigurationsResponse = getSecurityConfigurationsResponse;
        return this;
    }
    public Object internalServiceException;
    public GetSecurityConfigurationsResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public GetSecurityConfigurationsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public GetSecurityConfigurationsResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public GetSecurityConfigurationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}