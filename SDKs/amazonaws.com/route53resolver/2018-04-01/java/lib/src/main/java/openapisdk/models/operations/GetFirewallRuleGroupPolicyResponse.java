package openapisdk.models.operations;



public class GetFirewallRuleGroupPolicyResponse {
    public Object accessDeniedException;
    public GetFirewallRuleGroupPolicyResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetFirewallRuleGroupPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetFirewallRuleGroupPolicyResponse getFirewallRuleGroupPolicyResponse;
    public GetFirewallRuleGroupPolicyResponse withGetFirewallRuleGroupPolicyResponse(openapisdk.models.shared.GetFirewallRuleGroupPolicyResponse getFirewallRuleGroupPolicyResponse) {
        this.getFirewallRuleGroupPolicyResponse = getFirewallRuleGroupPolicyResponse;
        return this;
    }
    public Object internalServiceErrorException;
    public GetFirewallRuleGroupPolicyResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetFirewallRuleGroupPolicyResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetFirewallRuleGroupPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetFirewallRuleGroupPolicyResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public GetFirewallRuleGroupPolicyResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}