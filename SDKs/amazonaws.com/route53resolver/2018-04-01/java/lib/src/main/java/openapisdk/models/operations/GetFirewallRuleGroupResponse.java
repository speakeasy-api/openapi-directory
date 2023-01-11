package openapisdk.models.operations;



public class GetFirewallRuleGroupResponse {
    public Object accessDeniedException;
    public GetFirewallRuleGroupResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetFirewallRuleGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetFirewallRuleGroupResponse getFirewallRuleGroupResponse;
    public GetFirewallRuleGroupResponse withGetFirewallRuleGroupResponse(openapisdk.models.shared.GetFirewallRuleGroupResponse getFirewallRuleGroupResponse) {
        this.getFirewallRuleGroupResponse = getFirewallRuleGroupResponse;
        return this;
    }
    public Object internalServiceErrorException;
    public GetFirewallRuleGroupResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetFirewallRuleGroupResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetFirewallRuleGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetFirewallRuleGroupResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}