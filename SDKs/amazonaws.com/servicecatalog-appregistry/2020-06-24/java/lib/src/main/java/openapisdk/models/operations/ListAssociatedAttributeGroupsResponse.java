package openapisdk.models.operations;



public class ListAssociatedAttributeGroupsResponse {
    public String contentType;
    public ListAssociatedAttributeGroupsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListAssociatedAttributeGroupsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListAssociatedAttributeGroupsResponse listAssociatedAttributeGroupsResponse;
    public ListAssociatedAttributeGroupsResponse withListAssociatedAttributeGroupsResponse(openapisdk.models.shared.ListAssociatedAttributeGroupsResponse listAssociatedAttributeGroupsResponse) {
        this.listAssociatedAttributeGroupsResponse = listAssociatedAttributeGroupsResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListAssociatedAttributeGroupsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListAssociatedAttributeGroupsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public ListAssociatedAttributeGroupsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}