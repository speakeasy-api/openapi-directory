package openapisdk.models.operations;



public class DisableOrganizationAdminAccountResponse {
    public Object accessDeniedException;
    public DisableOrganizationAdminAccountResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public DisableOrganizationAdminAccountResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public DisableOrganizationAdminAccountResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> disableOrganizationAdminAccountResponse;
    public DisableOrganizationAdminAccountResponse withDisableOrganizationAdminAccountResponse(java.util.Map<String, Object> disableOrganizationAdminAccountResponse) {
        this.disableOrganizationAdminAccountResponse = disableOrganizationAdminAccountResponse;
        return this;
    }
    public Object internalServerException;
    public DisableOrganizationAdminAccountResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DisableOrganizationAdminAccountResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public DisableOrganizationAdminAccountResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public DisableOrganizationAdminAccountResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DisableOrganizationAdminAccountResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DisableOrganizationAdminAccountResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}