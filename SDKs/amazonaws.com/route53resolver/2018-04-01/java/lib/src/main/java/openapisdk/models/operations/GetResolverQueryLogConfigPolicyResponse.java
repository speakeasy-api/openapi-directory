package openapisdk.models.operations;



public class GetResolverQueryLogConfigPolicyResponse {
    public Object accessDeniedException;
    public GetResolverQueryLogConfigPolicyResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetResolverQueryLogConfigPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetResolverQueryLogConfigPolicyResponse getResolverQueryLogConfigPolicyResponse;
    public GetResolverQueryLogConfigPolicyResponse withGetResolverQueryLogConfigPolicyResponse(openapisdk.models.shared.GetResolverQueryLogConfigPolicyResponse getResolverQueryLogConfigPolicyResponse) {
        this.getResolverQueryLogConfigPolicyResponse = getResolverQueryLogConfigPolicyResponse;
        return this;
    }
    public Object internalServiceErrorException;
    public GetResolverQueryLogConfigPolicyResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public Object invalidParameterException;
    public GetResolverQueryLogConfigPolicyResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidRequestException;
    public GetResolverQueryLogConfigPolicyResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public GetResolverQueryLogConfigPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unknownResourceException;
    public GetResolverQueryLogConfigPolicyResponse withUnknownResourceException(Object unknownResourceException) {
        this.unknownResourceException = unknownResourceException;
        return this;
    }
}