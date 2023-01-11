package openapisdk.models.operations;



public class DeleteFirewallRuleGroupResponse {
    public Object accessDeniedException;
    public DeleteFirewallRuleGroupResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public DeleteFirewallRuleGroupResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public DeleteFirewallRuleGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteFirewallRuleGroupResponse deleteFirewallRuleGroupResponse;
    public DeleteFirewallRuleGroupResponse withDeleteFirewallRuleGroupResponse(openapisdk.models.shared.DeleteFirewallRuleGroupResponse deleteFirewallRuleGroupResponse) {
        this.deleteFirewallRuleGroupResponse = deleteFirewallRuleGroupResponse;
        return this;
    }
    public Object internalServiceErrorException;
    public DeleteFirewallRuleGroupResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteFirewallRuleGroupResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteFirewallRuleGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DeleteFirewallRuleGroupResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DeleteFirewallRuleGroupResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}