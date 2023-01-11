package openapisdk.models.operations;



public class ListGroupMembersResponse {
    public String contentType;
    public ListGroupMembersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public ListGroupMembersResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public Object entityStateException;
    public ListGroupMembersResponse withEntityStateException(Object entityStateException) {
        this.entityStateException = entityStateException;
        return this;
    }
    public Object invalidParameterException;
    public ListGroupMembersResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public openapisdk.models.shared.ListGroupMembersResponse listGroupMembersResponse;
    public ListGroupMembersResponse withListGroupMembersResponse(openapisdk.models.shared.ListGroupMembersResponse listGroupMembersResponse) {
        this.listGroupMembersResponse = listGroupMembersResponse;
        return this;
    }
    public Object organizationNotFoundException;
    public ListGroupMembersResponse withOrganizationNotFoundException(Object organizationNotFoundException) {
        this.organizationNotFoundException = organizationNotFoundException;
        return this;
    }
    public Object organizationStateException;
    public ListGroupMembersResponse withOrganizationStateException(Object organizationStateException) {
        this.organizationStateException = organizationStateException;
        return this;
    }
    public Long statusCode;
    public ListGroupMembersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}