package openapisdk.models.operations;



public class EnableOrganizationAdminAccountResponse {
    public Object accessDeniedException;
    public EnableOrganizationAdminAccountResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public EnableOrganizationAdminAccountResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public EnableOrganizationAdminAccountResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> enableOrganizationAdminAccountResponse;
    public EnableOrganizationAdminAccountResponse withEnableOrganizationAdminAccountResponse(java.util.Map<String, Object> enableOrganizationAdminAccountResponse) {
        this.enableOrganizationAdminAccountResponse = enableOrganizationAdminAccountResponse;
        return this;
    }
    public Object internalServerException;
    public EnableOrganizationAdminAccountResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public EnableOrganizationAdminAccountResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public EnableOrganizationAdminAccountResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public EnableOrganizationAdminAccountResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public EnableOrganizationAdminAccountResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public EnableOrganizationAdminAccountResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}