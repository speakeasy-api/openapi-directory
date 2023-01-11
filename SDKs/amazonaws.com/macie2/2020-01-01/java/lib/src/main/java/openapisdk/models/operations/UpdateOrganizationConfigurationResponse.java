package openapisdk.models.operations;



public class UpdateOrganizationConfigurationResponse {
    public Object accessDeniedException;
    public UpdateOrganizationConfigurationResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public UpdateOrganizationConfigurationResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public UpdateOrganizationConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public UpdateOrganizationConfigurationResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateOrganizationConfigurationResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public UpdateOrganizationConfigurationResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public UpdateOrganizationConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public UpdateOrganizationConfigurationResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public java.util.Map<String, Object> updateOrganizationConfigurationResponse;
    public UpdateOrganizationConfigurationResponse withUpdateOrganizationConfigurationResponse(java.util.Map<String, Object> updateOrganizationConfigurationResponse) {
        this.updateOrganizationConfigurationResponse = updateOrganizationConfigurationResponse;
        return this;
    }
    public Object validationException;
    public UpdateOrganizationConfigurationResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}