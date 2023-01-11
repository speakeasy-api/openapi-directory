package openapisdk.models.operations;



public class DisassociateResourceResponse {
    public String contentType;
    public DisassociateResourceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DisassociateResourceResponse disassociateResourceResponse;
    public DisassociateResourceResponse withDisassociateResourceResponse(openapisdk.models.shared.DisassociateResourceResponse disassociateResourceResponse) {
        this.disassociateResourceResponse = disassociateResourceResponse;
        return this;
    }
    public Object internalServerException;
    public DisassociateResourceResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DisassociateResourceResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DisassociateResourceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}