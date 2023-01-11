package openapisdk.models.operations;



public class AssociateResolverRuleResponse {
    public openapisdk.models.shared.AssociateResolverRuleResponse associateResolverRuleResponse;
    public AssociateResolverRuleResponse withAssociateResolverRuleResponse(openapisdk.models.shared.AssociateResolverRuleResponse associateResolverRuleResponse) {
        this.associateResolverRuleResponse = associateResolverRuleResponse;
        return this;
    }
    public String contentType;
    public AssociateResolverRuleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceErrorException;
    public AssociateResolverRuleResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public Object invalidParameterException;
    public AssociateResolverRuleResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidRequestException;
    public AssociateResolverRuleResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object limitExceededException;
    public AssociateResolverRuleResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceExistsException;
    public AssociateResolverRuleResponse withResourceExistsException(Object resourceExistsException) {
        this.resourceExistsException = resourceExistsException;
        return this;
    }
    public Object resourceNotFoundException;
    public AssociateResolverRuleResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object resourceUnavailableException;
    public AssociateResolverRuleResponse withResourceUnavailableException(Object resourceUnavailableException) {
        this.resourceUnavailableException = resourceUnavailableException;
        return this;
    }
    public Long statusCode;
    public AssociateResolverRuleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public AssociateResolverRuleResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}