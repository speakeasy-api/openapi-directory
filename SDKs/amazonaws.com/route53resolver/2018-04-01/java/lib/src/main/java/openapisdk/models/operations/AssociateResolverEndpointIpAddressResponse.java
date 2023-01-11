package openapisdk.models.operations;



public class AssociateResolverEndpointIpAddressResponse {
    public openapisdk.models.shared.AssociateResolverEndpointIpAddressResponse associateResolverEndpointIpAddressResponse;
    public AssociateResolverEndpointIpAddressResponse withAssociateResolverEndpointIpAddressResponse(openapisdk.models.shared.AssociateResolverEndpointIpAddressResponse associateResolverEndpointIpAddressResponse) {
        this.associateResolverEndpointIpAddressResponse = associateResolverEndpointIpAddressResponse;
        return this;
    }
    public String contentType;
    public AssociateResolverEndpointIpAddressResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceErrorException;
    public AssociateResolverEndpointIpAddressResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public Object invalidParameterException;
    public AssociateResolverEndpointIpAddressResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidRequestException;
    public AssociateResolverEndpointIpAddressResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object limitExceededException;
    public AssociateResolverEndpointIpAddressResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceExistsException;
    public AssociateResolverEndpointIpAddressResponse withResourceExistsException(Object resourceExistsException) {
        this.resourceExistsException = resourceExistsException;
        return this;
    }
    public Object resourceNotFoundException;
    public AssociateResolverEndpointIpAddressResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public AssociateResolverEndpointIpAddressResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public AssociateResolverEndpointIpAddressResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}