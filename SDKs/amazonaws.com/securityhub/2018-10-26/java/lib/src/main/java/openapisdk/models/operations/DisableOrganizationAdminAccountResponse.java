package openapisdk.models.operations;



public class DisableOrganizationAdminAccountResponse {
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
    public Object internalException;
    public DisableOrganizationAdminAccountResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidAccessException;
    public DisableOrganizationAdminAccountResponse withInvalidAccessException(Object invalidAccessException) {
        this.invalidAccessException = invalidAccessException;
        return this;
    }
    public Object invalidInputException;
    public DisableOrganizationAdminAccountResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object limitExceededException;
    public DisableOrganizationAdminAccountResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Long statusCode;
    public DisableOrganizationAdminAccountResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}