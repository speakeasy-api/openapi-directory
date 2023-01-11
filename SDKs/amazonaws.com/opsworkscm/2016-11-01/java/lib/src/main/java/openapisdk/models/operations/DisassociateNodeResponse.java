package openapisdk.models.operations;



public class DisassociateNodeResponse {
    public String contentType;
    public DisassociateNodeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DisassociateNodeResponse disassociateNodeResponse;
    public DisassociateNodeResponse withDisassociateNodeResponse(openapisdk.models.shared.DisassociateNodeResponse disassociateNodeResponse) {
        this.disassociateNodeResponse = disassociateNodeResponse;
        return this;
    }
    public Object invalidStateException;
    public DisassociateNodeResponse withInvalidStateException(Object invalidStateException) {
        this.invalidStateException = invalidStateException;
        return this;
    }
    public Object resourceNotFoundException;
    public DisassociateNodeResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DisassociateNodeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DisassociateNodeResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}