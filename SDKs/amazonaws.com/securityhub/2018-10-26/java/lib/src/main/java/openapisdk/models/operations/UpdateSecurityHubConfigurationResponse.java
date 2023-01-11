package openapisdk.models.operations;



public class UpdateSecurityHubConfigurationResponse {
    public String contentType;
    public UpdateSecurityHubConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalException;
    public UpdateSecurityHubConfigurationResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidAccessException;
    public UpdateSecurityHubConfigurationResponse withInvalidAccessException(Object invalidAccessException) {
        this.invalidAccessException = invalidAccessException;
        return this;
    }
    public Object invalidInputException;
    public UpdateSecurityHubConfigurationResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object limitExceededException;
    public UpdateSecurityHubConfigurationResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateSecurityHubConfigurationResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateSecurityHubConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> updateSecurityHubConfigurationResponse;
    public UpdateSecurityHubConfigurationResponse withUpdateSecurityHubConfigurationResponse(java.util.Map<String, Object> updateSecurityHubConfigurationResponse) {
        this.updateSecurityHubConfigurationResponse = updateSecurityHubConfigurationResponse;
        return this;
    }
}