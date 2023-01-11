package openapisdk.models.operations;



public class UpdateFirewallRuleGroupAssociationResponse {
    public Object accessDeniedException;
    public UpdateFirewallRuleGroupAssociationResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public UpdateFirewallRuleGroupAssociationResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public UpdateFirewallRuleGroupAssociationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceErrorException;
    public UpdateFirewallRuleGroupAssociationResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateFirewallRuleGroupAssociationResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateFirewallRuleGroupAssociationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public UpdateFirewallRuleGroupAssociationResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public openapisdk.models.shared.UpdateFirewallRuleGroupAssociationResponse updateFirewallRuleGroupAssociationResponse;
    public UpdateFirewallRuleGroupAssociationResponse withUpdateFirewallRuleGroupAssociationResponse(openapisdk.models.shared.UpdateFirewallRuleGroupAssociationResponse updateFirewallRuleGroupAssociationResponse) {
        this.updateFirewallRuleGroupAssociationResponse = updateFirewallRuleGroupAssociationResponse;
        return this;
    }
    public Object validationException;
    public UpdateFirewallRuleGroupAssociationResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}