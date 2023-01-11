package openapisdk.models.operations;



public class PutResolverRulePolicyResponse {
    public String contentType;
    public PutResolverRulePolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceErrorException;
    public PutResolverRulePolicyResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public Object invalidParameterException;
    public PutResolverRulePolicyResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidPolicyDocument;
    public PutResolverRulePolicyResponse withInvalidPolicyDocument(Object invalidPolicyDocument) {
        this.invalidPolicyDocument = invalidPolicyDocument;
        return this;
    }
    public openapisdk.models.shared.PutResolverRulePolicyResponse putResolverRulePolicyResponse;
    public PutResolverRulePolicyResponse withPutResolverRulePolicyResponse(openapisdk.models.shared.PutResolverRulePolicyResponse putResolverRulePolicyResponse) {
        this.putResolverRulePolicyResponse = putResolverRulePolicyResponse;
        return this;
    }
    public Long statusCode;
    public PutResolverRulePolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unknownResourceException;
    public PutResolverRulePolicyResponse withUnknownResourceException(Object unknownResourceException) {
        this.unknownResourceException = unknownResourceException;
        return this;
    }
}