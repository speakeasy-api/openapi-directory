package openapisdk.models.operations;



public class GetFirewallRuleGroupAssociationResponse {
    public Object accessDeniedException;
    public GetFirewallRuleGroupAssociationResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetFirewallRuleGroupAssociationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetFirewallRuleGroupAssociationResponse getFirewallRuleGroupAssociationResponse;
    public GetFirewallRuleGroupAssociationResponse withGetFirewallRuleGroupAssociationResponse(openapisdk.models.shared.GetFirewallRuleGroupAssociationResponse getFirewallRuleGroupAssociationResponse) {
        this.getFirewallRuleGroupAssociationResponse = getFirewallRuleGroupAssociationResponse;
        return this;
    }
    public Object internalServiceErrorException;
    public GetFirewallRuleGroupAssociationResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetFirewallRuleGroupAssociationResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetFirewallRuleGroupAssociationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetFirewallRuleGroupAssociationResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}