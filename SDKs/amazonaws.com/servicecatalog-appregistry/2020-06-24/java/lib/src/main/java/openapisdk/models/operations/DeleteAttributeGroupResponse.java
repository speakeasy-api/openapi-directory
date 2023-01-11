package openapisdk.models.operations;



public class DeleteAttributeGroupResponse {
    public String contentType;
    public DeleteAttributeGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteAttributeGroupResponse deleteAttributeGroupResponse;
    public DeleteAttributeGroupResponse withDeleteAttributeGroupResponse(openapisdk.models.shared.DeleteAttributeGroupResponse deleteAttributeGroupResponse) {
        this.deleteAttributeGroupResponse = deleteAttributeGroupResponse;
        return this;
    }
    public Object internalServerException;
    public DeleteAttributeGroupResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteAttributeGroupResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteAttributeGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DeleteAttributeGroupResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}