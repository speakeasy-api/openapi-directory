package openapisdk.models.operations;



public class CreateResolverEndpointResponse {
    public String contentType;
    public CreateResolverEndpointResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateResolverEndpointResponse createResolverEndpointResponse;
    public CreateResolverEndpointResponse withCreateResolverEndpointResponse(openapisdk.models.shared.CreateResolverEndpointResponse createResolverEndpointResponse) {
        this.createResolverEndpointResponse = createResolverEndpointResponse;
        return this;
    }
    public Object internalServiceErrorException;
    public CreateResolverEndpointResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public Object invalidParameterException;
    public CreateResolverEndpointResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidRequestException;
    public CreateResolverEndpointResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object limitExceededException;
    public CreateResolverEndpointResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceExistsException;
    public CreateResolverEndpointResponse withResourceExistsException(Object resourceExistsException) {
        this.resourceExistsException = resourceExistsException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateResolverEndpointResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public CreateResolverEndpointResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CreateResolverEndpointResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}