package openapisdk.models.operations;



public class ListResolverEndpointsResponse {
    public String contentType;
    public ListResolverEndpointsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceErrorException;
    public ListResolverEndpointsResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public Object invalidNextTokenException;
    public ListResolverEndpointsResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public Object invalidParameterException;
    public ListResolverEndpointsResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidRequestException;
    public ListResolverEndpointsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListResolverEndpointsResponse listResolverEndpointsResponse;
    public ListResolverEndpointsResponse withListResolverEndpointsResponse(openapisdk.models.shared.ListResolverEndpointsResponse listResolverEndpointsResponse) {
        this.listResolverEndpointsResponse = listResolverEndpointsResponse;
        return this;
    }
    public Long statusCode;
    public ListResolverEndpointsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListResolverEndpointsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}