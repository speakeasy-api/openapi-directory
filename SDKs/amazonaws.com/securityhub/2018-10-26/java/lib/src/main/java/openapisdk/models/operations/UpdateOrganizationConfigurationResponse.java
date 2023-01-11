package openapisdk.models.operations;



public class UpdateOrganizationConfigurationResponse {
    public String contentType;
    public UpdateOrganizationConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalException;
    public UpdateOrganizationConfigurationResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidAccessException;
    public UpdateOrganizationConfigurationResponse withInvalidAccessException(Object invalidAccessException) {
        this.invalidAccessException = invalidAccessException;
        return this;
    }
    public Object invalidInputException;
    public UpdateOrganizationConfigurationResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object limitExceededException;
    public UpdateOrganizationConfigurationResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Long statusCode;
    public UpdateOrganizationConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> updateOrganizationConfigurationResponse;
    public UpdateOrganizationConfigurationResponse withUpdateOrganizationConfigurationResponse(java.util.Map<String, Object> updateOrganizationConfigurationResponse) {
        this.updateOrganizationConfigurationResponse = updateOrganizationConfigurationResponse;
        return this;
    }
}