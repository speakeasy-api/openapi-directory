package openapisdk.models.operations;



public class CreateAttributeGroupResponse {
    public Object conflictException;
    public CreateAttributeGroupResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public CreateAttributeGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateAttributeGroupResponse createAttributeGroupResponse;
    public CreateAttributeGroupResponse withCreateAttributeGroupResponse(openapisdk.models.shared.CreateAttributeGroupResponse createAttributeGroupResponse) {
        this.createAttributeGroupResponse = createAttributeGroupResponse;
        return this;
    }
    public Object internalServerException;
    public CreateAttributeGroupResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public CreateAttributeGroupResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public CreateAttributeGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public CreateAttributeGroupResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}