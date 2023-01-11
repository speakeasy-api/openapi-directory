package openapisdk.models.operations;



public class ListOrganizationAdminAccountsResponse {
    public Object accessDeniedException;
    public ListOrganizationAdminAccountsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public ListOrganizationAdminAccountsResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public ListOrganizationAdminAccountsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListOrganizationAdminAccountsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListOrganizationAdminAccountsResponse listOrganizationAdminAccountsResponse;
    public ListOrganizationAdminAccountsResponse withListOrganizationAdminAccountsResponse(openapisdk.models.shared.ListOrganizationAdminAccountsResponse listOrganizationAdminAccountsResponse) {
        this.listOrganizationAdminAccountsResponse = listOrganizationAdminAccountsResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListOrganizationAdminAccountsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public ListOrganizationAdminAccountsResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public ListOrganizationAdminAccountsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListOrganizationAdminAccountsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListOrganizationAdminAccountsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}