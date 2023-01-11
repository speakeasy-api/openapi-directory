package openapisdk.models.operations;



public class ListFirewallRuleGroupsResponse {
    public Object accessDeniedException;
    public ListFirewallRuleGroupsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListFirewallRuleGroupsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceErrorException;
    public ListFirewallRuleGroupsResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public openapisdk.models.shared.ListFirewallRuleGroupsResponse listFirewallRuleGroupsResponse;
    public ListFirewallRuleGroupsResponse withListFirewallRuleGroupsResponse(openapisdk.models.shared.ListFirewallRuleGroupsResponse listFirewallRuleGroupsResponse) {
        this.listFirewallRuleGroupsResponse = listFirewallRuleGroupsResponse;
        return this;
    }
    public Long statusCode;
    public ListFirewallRuleGroupsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListFirewallRuleGroupsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListFirewallRuleGroupsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}