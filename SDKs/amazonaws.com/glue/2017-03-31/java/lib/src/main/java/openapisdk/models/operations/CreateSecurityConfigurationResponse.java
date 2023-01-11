package openapisdk.models.operations;



public class CreateSecurityConfigurationResponse {
    public Object alreadyExistsException;
    public CreateSecurityConfigurationResponse withAlreadyExistsException(Object alreadyExistsException) {
        this.alreadyExistsException = alreadyExistsException;
        return this;
    }
    public String contentType;
    public CreateSecurityConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateSecurityConfigurationResponse createSecurityConfigurationResponse;
    public CreateSecurityConfigurationResponse withCreateSecurityConfigurationResponse(openapisdk.models.shared.CreateSecurityConfigurationResponse createSecurityConfigurationResponse) {
        this.createSecurityConfigurationResponse = createSecurityConfigurationResponse;
        return this;
    }
    public Object internalServiceException;
    public CreateSecurityConfigurationResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public CreateSecurityConfigurationResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public CreateSecurityConfigurationResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Object resourceNumberLimitExceededException;
    public CreateSecurityConfigurationResponse withResourceNumberLimitExceededException(Object resourceNumberLimitExceededException) {
        this.resourceNumberLimitExceededException = resourceNumberLimitExceededException;
        return this;
    }
    public Long statusCode;
    public CreateSecurityConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}