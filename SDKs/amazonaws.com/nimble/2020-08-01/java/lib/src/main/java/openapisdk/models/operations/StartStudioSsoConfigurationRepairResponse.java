package openapisdk.models.operations;



public class StartStudioSsoConfigurationRepairResponse {
    public Object accessDeniedException;
    public StartStudioSsoConfigurationRepairResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public StartStudioSsoConfigurationRepairResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public StartStudioSsoConfigurationRepairResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerErrorException;
    public StartStudioSsoConfigurationRepairResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Object resourceNotFoundException;
    public StartStudioSsoConfigurationRepairResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public StartStudioSsoConfigurationRepairResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public openapisdk.models.shared.StartStudioSsoConfigurationRepairResponse startStudioSSOConfigurationRepairResponse;
    public StartStudioSsoConfigurationRepairResponse withStartStudioSsoConfigurationRepairResponse(openapisdk.models.shared.StartStudioSsoConfigurationRepairResponse startStudioSSOConfigurationRepairResponse) {
        this.startStudioSSOConfigurationRepairResponse = startStudioSSOConfigurationRepairResponse;
        return this;
    }
    public Long statusCode;
    public StartStudioSsoConfigurationRepairResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public StartStudioSsoConfigurationRepairResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public StartStudioSsoConfigurationRepairResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}