package openapisdk.models.operations;



public class GetResolverEndpointResponse {
    public String contentType;
    public GetResolverEndpointResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetResolverEndpointResponse getResolverEndpointResponse;
    public GetResolverEndpointResponse withGetResolverEndpointResponse(openapisdk.models.shared.GetResolverEndpointResponse getResolverEndpointResponse) {
        this.getResolverEndpointResponse = getResolverEndpointResponse;
        return this;
    }
    public Object internalServiceErrorException;
    public GetResolverEndpointResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public Object invalidParameterException;
    public GetResolverEndpointResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetResolverEndpointResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetResolverEndpointResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetResolverEndpointResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}