package openapisdk.models.operations;



public class UpdateResolverEndpointResponse {
    public String contentType;
    public UpdateResolverEndpointResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceErrorException;
    public UpdateResolverEndpointResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public Object invalidParameterException;
    public UpdateResolverEndpointResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidRequestException;
    public UpdateResolverEndpointResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateResolverEndpointResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateResolverEndpointResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public UpdateResolverEndpointResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public openapisdk.models.shared.UpdateResolverEndpointResponse updateResolverEndpointResponse;
    public UpdateResolverEndpointResponse withUpdateResolverEndpointResponse(openapisdk.models.shared.UpdateResolverEndpointResponse updateResolverEndpointResponse) {
        this.updateResolverEndpointResponse = updateResolverEndpointResponse;
        return this;
    }
}