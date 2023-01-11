package openapisdk.models.operations;



public class GetResolverRuleResponse {
    public String contentType;
    public GetResolverRuleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetResolverRuleResponse getResolverRuleResponse;
    public GetResolverRuleResponse withGetResolverRuleResponse(openapisdk.models.shared.GetResolverRuleResponse getResolverRuleResponse) {
        this.getResolverRuleResponse = getResolverRuleResponse;
        return this;
    }
    public Object internalServiceErrorException;
    public GetResolverRuleResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public Object invalidParameterException;
    public GetResolverRuleResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetResolverRuleResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetResolverRuleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetResolverRuleResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}