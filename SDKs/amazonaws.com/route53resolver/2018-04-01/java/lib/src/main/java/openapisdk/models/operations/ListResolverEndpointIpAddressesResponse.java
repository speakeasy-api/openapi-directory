package openapisdk.models.operations;



public class ListResolverEndpointIpAddressesResponse {
    public String contentType;
    public ListResolverEndpointIpAddressesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceErrorException;
    public ListResolverEndpointIpAddressesResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public Object invalidNextTokenException;
    public ListResolverEndpointIpAddressesResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public Object invalidParameterException;
    public ListResolverEndpointIpAddressesResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public openapisdk.models.shared.ListResolverEndpointIpAddressesResponse listResolverEndpointIpAddressesResponse;
    public ListResolverEndpointIpAddressesResponse withListResolverEndpointIpAddressesResponse(openapisdk.models.shared.ListResolverEndpointIpAddressesResponse listResolverEndpointIpAddressesResponse) {
        this.listResolverEndpointIpAddressesResponse = listResolverEndpointIpAddressesResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListResolverEndpointIpAddressesResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListResolverEndpointIpAddressesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListResolverEndpointIpAddressesResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}