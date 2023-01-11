package openapisdk.models.operations;



public class ListResourceDelegatesResponse {
    public String contentType;
    public ListResourceDelegatesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public ListResourceDelegatesResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public Object entityStateException;
    public ListResourceDelegatesResponse withEntityStateException(Object entityStateException) {
        this.entityStateException = entityStateException;
        return this;
    }
    public Object invalidParameterException;
    public ListResourceDelegatesResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public openapisdk.models.shared.ListResourceDelegatesResponse listResourceDelegatesResponse;
    public ListResourceDelegatesResponse withListResourceDelegatesResponse(openapisdk.models.shared.ListResourceDelegatesResponse listResourceDelegatesResponse) {
        this.listResourceDelegatesResponse = listResourceDelegatesResponse;
        return this;
    }
    public Object organizationNotFoundException;
    public ListResourceDelegatesResponse withOrganizationNotFoundException(Object organizationNotFoundException) {
        this.organizationNotFoundException = organizationNotFoundException;
        return this;
    }
    public Object organizationStateException;
    public ListResourceDelegatesResponse withOrganizationStateException(Object organizationStateException) {
        this.organizationStateException = organizationStateException;
        return this;
    }
    public Long statusCode;
    public ListResourceDelegatesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}