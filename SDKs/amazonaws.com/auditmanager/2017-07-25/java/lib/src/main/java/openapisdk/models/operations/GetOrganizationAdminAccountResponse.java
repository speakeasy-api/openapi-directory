package openapisdk.models.operations;



public class GetOrganizationAdminAccountResponse {
    public Object accessDeniedException;
    public GetOrganizationAdminAccountResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetOrganizationAdminAccountResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetOrganizationAdminAccountResponse getOrganizationAdminAccountResponse;
    public GetOrganizationAdminAccountResponse withGetOrganizationAdminAccountResponse(openapisdk.models.shared.GetOrganizationAdminAccountResponse getOrganizationAdminAccountResponse) {
        this.getOrganizationAdminAccountResponse = getOrganizationAdminAccountResponse;
        return this;
    }
    public Object internalServerException;
    public GetOrganizationAdminAccountResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetOrganizationAdminAccountResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetOrganizationAdminAccountResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public GetOrganizationAdminAccountResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}