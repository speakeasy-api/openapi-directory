package openapisdk.models.operations;



public class DeleteFirewallRuleResponse {
    public Object accessDeniedException;
    public DeleteFirewallRuleResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DeleteFirewallRuleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteFirewallRuleResponse deleteFirewallRuleResponse;
    public DeleteFirewallRuleResponse withDeleteFirewallRuleResponse(openapisdk.models.shared.DeleteFirewallRuleResponse deleteFirewallRuleResponse) {
        this.deleteFirewallRuleResponse = deleteFirewallRuleResponse;
        return this;
    }
    public Object internalServiceErrorException;
    public DeleteFirewallRuleResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteFirewallRuleResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteFirewallRuleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DeleteFirewallRuleResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}