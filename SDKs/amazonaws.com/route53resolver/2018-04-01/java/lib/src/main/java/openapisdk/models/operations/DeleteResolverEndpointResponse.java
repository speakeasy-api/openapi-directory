package openapisdk.models.operations;



public class DeleteResolverEndpointResponse {
    public String contentType;
    public DeleteResolverEndpointResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteResolverEndpointResponse deleteResolverEndpointResponse;
    public DeleteResolverEndpointResponse withDeleteResolverEndpointResponse(openapisdk.models.shared.DeleteResolverEndpointResponse deleteResolverEndpointResponse) {
        this.deleteResolverEndpointResponse = deleteResolverEndpointResponse;
        return this;
    }
    public Object internalServiceErrorException;
    public DeleteResolverEndpointResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public Object invalidParameterException;
    public DeleteResolverEndpointResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidRequestException;
    public DeleteResolverEndpointResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteResolverEndpointResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteResolverEndpointResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DeleteResolverEndpointResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}