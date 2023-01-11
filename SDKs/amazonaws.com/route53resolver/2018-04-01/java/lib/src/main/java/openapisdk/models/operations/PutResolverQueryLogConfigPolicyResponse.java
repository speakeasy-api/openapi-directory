package openapisdk.models.operations;



public class PutResolverQueryLogConfigPolicyResponse {
    public Object accessDeniedException;
    public PutResolverQueryLogConfigPolicyResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public PutResolverQueryLogConfigPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceErrorException;
    public PutResolverQueryLogConfigPolicyResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public Object invalidParameterException;
    public PutResolverQueryLogConfigPolicyResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidPolicyDocument;
    public PutResolverQueryLogConfigPolicyResponse withInvalidPolicyDocument(Object invalidPolicyDocument) {
        this.invalidPolicyDocument = invalidPolicyDocument;
        return this;
    }
    public Object invalidRequestException;
    public PutResolverQueryLogConfigPolicyResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.PutResolverQueryLogConfigPolicyResponse putResolverQueryLogConfigPolicyResponse;
    public PutResolverQueryLogConfigPolicyResponse withPutResolverQueryLogConfigPolicyResponse(openapisdk.models.shared.PutResolverQueryLogConfigPolicyResponse putResolverQueryLogConfigPolicyResponse) {
        this.putResolverQueryLogConfigPolicyResponse = putResolverQueryLogConfigPolicyResponse;
        return this;
    }
    public Long statusCode;
    public PutResolverQueryLogConfigPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unknownResourceException;
    public PutResolverQueryLogConfigPolicyResponse withUnknownResourceException(Object unknownResourceException) {
        this.unknownResourceException = unknownResourceException;
        return this;
    }
}