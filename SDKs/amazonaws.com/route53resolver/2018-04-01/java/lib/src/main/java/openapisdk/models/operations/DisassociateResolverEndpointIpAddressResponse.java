package openapisdk.models.operations;



public class DisassociateResolverEndpointIpAddressResponse {
    public String contentType;
    public DisassociateResolverEndpointIpAddressResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DisassociateResolverEndpointIpAddressResponse disassociateResolverEndpointIpAddressResponse;
    public DisassociateResolverEndpointIpAddressResponse withDisassociateResolverEndpointIpAddressResponse(openapisdk.models.shared.DisassociateResolverEndpointIpAddressResponse disassociateResolverEndpointIpAddressResponse) {
        this.disassociateResolverEndpointIpAddressResponse = disassociateResolverEndpointIpAddressResponse;
        return this;
    }
    public Object internalServiceErrorException;
    public DisassociateResolverEndpointIpAddressResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public Object invalidParameterException;
    public DisassociateResolverEndpointIpAddressResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidRequestException;
    public DisassociateResolverEndpointIpAddressResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceExistsException;
    public DisassociateResolverEndpointIpAddressResponse withResourceExistsException(Object resourceExistsException) {
        this.resourceExistsException = resourceExistsException;
        return this;
    }
    public Object resourceNotFoundException;
    public DisassociateResolverEndpointIpAddressResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DisassociateResolverEndpointIpAddressResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DisassociateResolverEndpointIpAddressResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}