package openapisdk.models.operations;



public class AssociateFirewallRuleGroupResponse {
    public Object accessDeniedException;
    public AssociateFirewallRuleGroupResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public openapisdk.models.shared.AssociateFirewallRuleGroupResponse associateFirewallRuleGroupResponse;
    public AssociateFirewallRuleGroupResponse withAssociateFirewallRuleGroupResponse(openapisdk.models.shared.AssociateFirewallRuleGroupResponse associateFirewallRuleGroupResponse) {
        this.associateFirewallRuleGroupResponse = associateFirewallRuleGroupResponse;
        return this;
    }
    public Object conflictException;
    public AssociateFirewallRuleGroupResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public AssociateFirewallRuleGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceErrorException;
    public AssociateFirewallRuleGroupResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public Object limitExceededException;
    public AssociateFirewallRuleGroupResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public AssociateFirewallRuleGroupResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public AssociateFirewallRuleGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public AssociateFirewallRuleGroupResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public AssociateFirewallRuleGroupResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}