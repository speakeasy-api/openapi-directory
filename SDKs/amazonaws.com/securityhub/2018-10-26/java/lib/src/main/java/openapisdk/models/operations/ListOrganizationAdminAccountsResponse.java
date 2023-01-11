package openapisdk.models.operations;



public class ListOrganizationAdminAccountsResponse {
    public String contentType;
    public ListOrganizationAdminAccountsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalException;
    public ListOrganizationAdminAccountsResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidAccessException;
    public ListOrganizationAdminAccountsResponse withInvalidAccessException(Object invalidAccessException) {
        this.invalidAccessException = invalidAccessException;
        return this;
    }
    public Object invalidInputException;
    public ListOrganizationAdminAccountsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object limitExceededException;
    public ListOrganizationAdminAccountsResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.ListOrganizationAdminAccountsResponse listOrganizationAdminAccountsResponse;
    public ListOrganizationAdminAccountsResponse withListOrganizationAdminAccountsResponse(openapisdk.models.shared.ListOrganizationAdminAccountsResponse listOrganizationAdminAccountsResponse) {
        this.listOrganizationAdminAccountsResponse = listOrganizationAdminAccountsResponse;
        return this;
    }
    public Long statusCode;
    public ListOrganizationAdminAccountsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}