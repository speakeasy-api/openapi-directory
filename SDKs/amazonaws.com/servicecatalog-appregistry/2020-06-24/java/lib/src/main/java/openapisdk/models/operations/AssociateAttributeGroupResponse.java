package openapisdk.models.operations;



public class AssociateAttributeGroupResponse {
    public openapisdk.models.shared.AssociateAttributeGroupResponse associateAttributeGroupResponse;
    public AssociateAttributeGroupResponse withAssociateAttributeGroupResponse(openapisdk.models.shared.AssociateAttributeGroupResponse associateAttributeGroupResponse) {
        this.associateAttributeGroupResponse = associateAttributeGroupResponse;
        return this;
    }
    public String contentType;
    public AssociateAttributeGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public AssociateAttributeGroupResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public AssociateAttributeGroupResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public AssociateAttributeGroupResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public AssociateAttributeGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public AssociateAttributeGroupResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}