package openapisdk.models.operations;



public class GetResolverRulePolicyResponse {
    public String contentType;
    public GetResolverRulePolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetResolverRulePolicyResponse getResolverRulePolicyResponse;
    public GetResolverRulePolicyResponse withGetResolverRulePolicyResponse(openapisdk.models.shared.GetResolverRulePolicyResponse getResolverRulePolicyResponse) {
        this.getResolverRulePolicyResponse = getResolverRulePolicyResponse;
        return this;
    }
    public Object internalServiceErrorException;
    public GetResolverRulePolicyResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public Object invalidParameterException;
    public GetResolverRulePolicyResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Long statusCode;
    public GetResolverRulePolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unknownResourceException;
    public GetResolverRulePolicyResponse withUnknownResourceException(Object unknownResourceException) {
        this.unknownResourceException = unknownResourceException;
        return this;
    }
}