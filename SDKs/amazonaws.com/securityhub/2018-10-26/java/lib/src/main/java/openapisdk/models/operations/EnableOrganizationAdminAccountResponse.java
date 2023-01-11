package openapisdk.models.operations;



public class EnableOrganizationAdminAccountResponse {
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
    public Object internalException;
    public EnableOrganizationAdminAccountResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidAccessException;
    public EnableOrganizationAdminAccountResponse withInvalidAccessException(Object invalidAccessException) {
        this.invalidAccessException = invalidAccessException;
        return this;
    }
    public Object invalidInputException;
    public EnableOrganizationAdminAccountResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object limitExceededException;
    public EnableOrganizationAdminAccountResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Long statusCode;
    public EnableOrganizationAdminAccountResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}