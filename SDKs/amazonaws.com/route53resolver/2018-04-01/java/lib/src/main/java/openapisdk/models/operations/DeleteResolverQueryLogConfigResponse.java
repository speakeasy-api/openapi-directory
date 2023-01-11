package openapisdk.models.operations;



public class DeleteResolverQueryLogConfigResponse {
    public Object accessDeniedException;
    public DeleteResolverQueryLogConfigResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DeleteResolverQueryLogConfigResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteResolverQueryLogConfigResponse deleteResolverQueryLogConfigResponse;
    public DeleteResolverQueryLogConfigResponse withDeleteResolverQueryLogConfigResponse(openapisdk.models.shared.DeleteResolverQueryLogConfigResponse deleteResolverQueryLogConfigResponse) {
        this.deleteResolverQueryLogConfigResponse = deleteResolverQueryLogConfigResponse;
        return this;
    }
    public Object internalServiceErrorException;
    public DeleteResolverQueryLogConfigResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public Object invalidParameterException;
    public DeleteResolverQueryLogConfigResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidRequestException;
    public DeleteResolverQueryLogConfigResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteResolverQueryLogConfigResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteResolverQueryLogConfigResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DeleteResolverQueryLogConfigResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}