package openapisdk.models.operations;



public class ListAliasesResponse {
    public String contentType;
    public ListAliasesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public ListAliasesResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public Object entityStateException;
    public ListAliasesResponse withEntityStateException(Object entityStateException) {
        this.entityStateException = entityStateException;
        return this;
    }
    public Object invalidParameterException;
    public ListAliasesResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public openapisdk.models.shared.ListAliasesResponse listAliasesResponse;
    public ListAliasesResponse withListAliasesResponse(openapisdk.models.shared.ListAliasesResponse listAliasesResponse) {
        this.listAliasesResponse = listAliasesResponse;
        return this;
    }
    public Object organizationNotFoundException;
    public ListAliasesResponse withOrganizationNotFoundException(Object organizationNotFoundException) {
        this.organizationNotFoundException = organizationNotFoundException;
        return this;
    }
    public Object organizationStateException;
    public ListAliasesResponse withOrganizationStateException(Object organizationStateException) {
        this.organizationStateException = organizationStateException;
        return this;
    }
    public Long statusCode;
    public ListAliasesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}