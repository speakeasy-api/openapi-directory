package openapisdk.models.operations;



public class ListFirewallRuleGroupAssociationsResponse {
    public Object accessDeniedException;
    public ListFirewallRuleGroupAssociationsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListFirewallRuleGroupAssociationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceErrorException;
    public ListFirewallRuleGroupAssociationsResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public openapisdk.models.shared.ListFirewallRuleGroupAssociationsResponse listFirewallRuleGroupAssociationsResponse;
    public ListFirewallRuleGroupAssociationsResponse withListFirewallRuleGroupAssociationsResponse(openapisdk.models.shared.ListFirewallRuleGroupAssociationsResponse listFirewallRuleGroupAssociationsResponse) {
        this.listFirewallRuleGroupAssociationsResponse = listFirewallRuleGroupAssociationsResponse;
        return this;
    }
    public Long statusCode;
    public ListFirewallRuleGroupAssociationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListFirewallRuleGroupAssociationsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListFirewallRuleGroupAssociationsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}