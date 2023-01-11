package openapisdk.models.operations;



public class UpdateAttributeGroupResponse {
    public Object conflictException;
    public UpdateAttributeGroupResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public UpdateAttributeGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public UpdateAttributeGroupResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateAttributeGroupResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateAttributeGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateAttributeGroupResponse updateAttributeGroupResponse;
    public UpdateAttributeGroupResponse withUpdateAttributeGroupResponse(openapisdk.models.shared.UpdateAttributeGroupResponse updateAttributeGroupResponse) {
        this.updateAttributeGroupResponse = updateAttributeGroupResponse;
        return this;
    }
    public Object validationException;
    public UpdateAttributeGroupResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}