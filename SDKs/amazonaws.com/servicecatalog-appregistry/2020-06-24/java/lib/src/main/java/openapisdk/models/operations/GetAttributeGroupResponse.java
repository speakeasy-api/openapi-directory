package openapisdk.models.operations;



public class GetAttributeGroupResponse {
    public String contentType;
    public GetAttributeGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetAttributeGroupResponse getAttributeGroupResponse;
    public GetAttributeGroupResponse withGetAttributeGroupResponse(openapisdk.models.shared.GetAttributeGroupResponse getAttributeGroupResponse) {
        this.getAttributeGroupResponse = getAttributeGroupResponse;
        return this;
    }
    public Object internalServerException;
    public GetAttributeGroupResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetAttributeGroupResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetAttributeGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public GetAttributeGroupResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}