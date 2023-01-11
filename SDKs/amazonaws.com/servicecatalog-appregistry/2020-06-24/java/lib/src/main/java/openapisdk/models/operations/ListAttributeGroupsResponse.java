package openapisdk.models.operations;



public class ListAttributeGroupsResponse {
    public String contentType;
    public ListAttributeGroupsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListAttributeGroupsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListAttributeGroupsResponse listAttributeGroupsResponse;
    public ListAttributeGroupsResponse withListAttributeGroupsResponse(openapisdk.models.shared.ListAttributeGroupsResponse listAttributeGroupsResponse) {
        this.listAttributeGroupsResponse = listAttributeGroupsResponse;
        return this;
    }
    public Long statusCode;
    public ListAttributeGroupsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public ListAttributeGroupsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}