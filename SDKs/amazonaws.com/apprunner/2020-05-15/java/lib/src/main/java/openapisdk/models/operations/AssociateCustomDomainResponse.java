package openapisdk.models.operations;



public class AssociateCustomDomainResponse {
    public openapisdk.models.shared.AssociateCustomDomainResponse associateCustomDomainResponse;
    public AssociateCustomDomainResponse withAssociateCustomDomainResponse(openapisdk.models.shared.AssociateCustomDomainResponse associateCustomDomainResponse) {
        this.associateCustomDomainResponse = associateCustomDomainResponse;
        return this;
    }
    public String contentType;
    public AssociateCustomDomainResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceErrorException;
    public AssociateCustomDomainResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public Object invalidRequestException;
    public AssociateCustomDomainResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object invalidStateException;
    public AssociateCustomDomainResponse withInvalidStateException(Object invalidStateException) {
        this.invalidStateException = invalidStateException;
        return this;
    }
    public Long statusCode;
    public AssociateCustomDomainResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}