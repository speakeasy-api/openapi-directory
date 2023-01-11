package openapisdk.models.operations;



public class GetResolverRuleAssociationResponse {
    public String contentType;
    public GetResolverRuleAssociationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetResolverRuleAssociationResponse getResolverRuleAssociationResponse;
    public GetResolverRuleAssociationResponse withGetResolverRuleAssociationResponse(openapisdk.models.shared.GetResolverRuleAssociationResponse getResolverRuleAssociationResponse) {
        this.getResolverRuleAssociationResponse = getResolverRuleAssociationResponse;
        return this;
    }
    public Object internalServiceErrorException;
    public GetResolverRuleAssociationResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public Object invalidParameterException;
    public GetResolverRuleAssociationResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetResolverRuleAssociationResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetResolverRuleAssociationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetResolverRuleAssociationResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}