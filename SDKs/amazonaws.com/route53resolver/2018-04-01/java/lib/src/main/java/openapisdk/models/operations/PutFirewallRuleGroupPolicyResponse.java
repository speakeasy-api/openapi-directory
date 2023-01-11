package openapisdk.models.operations;



public class PutFirewallRuleGroupPolicyResponse {
    public Object accessDeniedException;
    public PutFirewallRuleGroupPolicyResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public PutFirewallRuleGroupPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceErrorException;
    public PutFirewallRuleGroupPolicyResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public openapisdk.models.shared.PutFirewallRuleGroupPolicyResponse putFirewallRuleGroupPolicyResponse;
    public PutFirewallRuleGroupPolicyResponse withPutFirewallRuleGroupPolicyResponse(openapisdk.models.shared.PutFirewallRuleGroupPolicyResponse putFirewallRuleGroupPolicyResponse) {
        this.putFirewallRuleGroupPolicyResponse = putFirewallRuleGroupPolicyResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public PutFirewallRuleGroupPolicyResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public PutFirewallRuleGroupPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public PutFirewallRuleGroupPolicyResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public PutFirewallRuleGroupPolicyResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}