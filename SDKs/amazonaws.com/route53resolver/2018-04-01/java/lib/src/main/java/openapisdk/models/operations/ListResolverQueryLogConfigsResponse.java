package openapisdk.models.operations;



public class ListResolverQueryLogConfigsResponse {
    public Object accessDeniedException;
    public ListResolverQueryLogConfigsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListResolverQueryLogConfigsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceErrorException;
    public ListResolverQueryLogConfigsResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public Object invalidNextTokenException;
    public ListResolverQueryLogConfigsResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public Object invalidParameterException;
    public ListResolverQueryLogConfigsResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidRequestException;
    public ListResolverQueryLogConfigsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListResolverQueryLogConfigsResponse listResolverQueryLogConfigsResponse;
    public ListResolverQueryLogConfigsResponse withListResolverQueryLogConfigsResponse(openapisdk.models.shared.ListResolverQueryLogConfigsResponse listResolverQueryLogConfigsResponse) {
        this.listResolverQueryLogConfigsResponse = listResolverQueryLogConfigsResponse;
        return this;
    }
    public Long statusCode;
    public ListResolverQueryLogConfigsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListResolverQueryLogConfigsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}