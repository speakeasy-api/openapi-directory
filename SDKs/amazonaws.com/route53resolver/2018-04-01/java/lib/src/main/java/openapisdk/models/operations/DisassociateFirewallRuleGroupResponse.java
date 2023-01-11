package openapisdk.models.operations;



public class DisassociateFirewallRuleGroupResponse {
    public Object accessDeniedException;
    public DisassociateFirewallRuleGroupResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public DisassociateFirewallRuleGroupResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public DisassociateFirewallRuleGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DisassociateFirewallRuleGroupResponse disassociateFirewallRuleGroupResponse;
    public DisassociateFirewallRuleGroupResponse withDisassociateFirewallRuleGroupResponse(openapisdk.models.shared.DisassociateFirewallRuleGroupResponse disassociateFirewallRuleGroupResponse) {
        this.disassociateFirewallRuleGroupResponse = disassociateFirewallRuleGroupResponse;
        return this;
    }
    public Object internalServiceErrorException;
    public DisassociateFirewallRuleGroupResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public Object resourceNotFoundException;
    public DisassociateFirewallRuleGroupResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DisassociateFirewallRuleGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DisassociateFirewallRuleGroupResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DisassociateFirewallRuleGroupResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}