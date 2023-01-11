package openapisdk.models.operations;



public class DisassociateCustomDomainResponse {
    public String contentType;
    public DisassociateCustomDomainResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DisassociateCustomDomainResponse disassociateCustomDomainResponse;
    public DisassociateCustomDomainResponse withDisassociateCustomDomainResponse(openapisdk.models.shared.DisassociateCustomDomainResponse disassociateCustomDomainResponse) {
        this.disassociateCustomDomainResponse = disassociateCustomDomainResponse;
        return this;
    }
    public Object internalServiceErrorException;
    public DisassociateCustomDomainResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public Object invalidRequestException;
    public DisassociateCustomDomainResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object invalidStateException;
    public DisassociateCustomDomainResponse withInvalidStateException(Object invalidStateException) {
        this.invalidStateException = invalidStateException;
        return this;
    }
    public Object resourceNotFoundException;
    public DisassociateCustomDomainResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DisassociateCustomDomainResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}