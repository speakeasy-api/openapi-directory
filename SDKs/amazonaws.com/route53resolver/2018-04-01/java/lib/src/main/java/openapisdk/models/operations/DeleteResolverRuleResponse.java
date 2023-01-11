package openapisdk.models.operations;



public class DeleteResolverRuleResponse {
    public String contentType;
    public DeleteResolverRuleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteResolverRuleResponse deleteResolverRuleResponse;
    public DeleteResolverRuleResponse withDeleteResolverRuleResponse(openapisdk.models.shared.DeleteResolverRuleResponse deleteResolverRuleResponse) {
        this.deleteResolverRuleResponse = deleteResolverRuleResponse;
        return this;
    }
    public Object internalServiceErrorException;
    public DeleteResolverRuleResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public Object invalidParameterException;
    public DeleteResolverRuleResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object resourceInUseException;
    public DeleteResolverRuleResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteResolverRuleResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteResolverRuleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DeleteResolverRuleResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}