package openapisdk.models.operations;



public class ListResourcesResponse {
    public String contentType;
    public ListResourcesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterException;
    public ListResourcesResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public openapisdk.models.shared.ListResourcesResponse listResourcesResponse;
    public ListResourcesResponse withListResourcesResponse(openapisdk.models.shared.ListResourcesResponse listResourcesResponse) {
        this.listResourcesResponse = listResourcesResponse;
        return this;
    }
    public Object organizationNotFoundException;
    public ListResourcesResponse withOrganizationNotFoundException(Object organizationNotFoundException) {
        this.organizationNotFoundException = organizationNotFoundException;
        return this;
    }
    public Object organizationStateException;
    public ListResourcesResponse withOrganizationStateException(Object organizationStateException) {
        this.organizationStateException = organizationStateException;
        return this;
    }
    public Long statusCode;
    public ListResourcesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}