package openapisdk.models.operations;



public class GetResolverQueryLogConfigResponse {
    public Object accessDeniedException;
    public GetResolverQueryLogConfigResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetResolverQueryLogConfigResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetResolverQueryLogConfigResponse getResolverQueryLogConfigResponse;
    public GetResolverQueryLogConfigResponse withGetResolverQueryLogConfigResponse(openapisdk.models.shared.GetResolverQueryLogConfigResponse getResolverQueryLogConfigResponse) {
        this.getResolverQueryLogConfigResponse = getResolverQueryLogConfigResponse;
        return this;
    }
    public Object internalServiceErrorException;
    public GetResolverQueryLogConfigResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public Object invalidParameterException;
    public GetResolverQueryLogConfigResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidRequestException;
    public GetResolverQueryLogConfigResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetResolverQueryLogConfigResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetResolverQueryLogConfigResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetResolverQueryLogConfigResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}