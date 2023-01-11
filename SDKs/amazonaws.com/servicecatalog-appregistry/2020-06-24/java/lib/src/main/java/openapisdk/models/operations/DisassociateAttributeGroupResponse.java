package openapisdk.models.operations;



public class DisassociateAttributeGroupResponse {
    public String contentType;
    public DisassociateAttributeGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DisassociateAttributeGroupResponse disassociateAttributeGroupResponse;
    public DisassociateAttributeGroupResponse withDisassociateAttributeGroupResponse(openapisdk.models.shared.DisassociateAttributeGroupResponse disassociateAttributeGroupResponse) {
        this.disassociateAttributeGroupResponse = disassociateAttributeGroupResponse;
        return this;
    }
    public Object internalServerException;
    public DisassociateAttributeGroupResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DisassociateAttributeGroupResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DisassociateAttributeGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DisassociateAttributeGroupResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}