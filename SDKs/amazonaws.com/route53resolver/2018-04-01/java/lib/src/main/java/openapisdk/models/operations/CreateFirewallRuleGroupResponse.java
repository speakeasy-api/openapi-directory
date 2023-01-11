package openapisdk.models.operations;



public class CreateFirewallRuleGroupResponse {
    public Object accessDeniedException;
    public CreateFirewallRuleGroupResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public CreateFirewallRuleGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateFirewallRuleGroupResponse createFirewallRuleGroupResponse;
    public CreateFirewallRuleGroupResponse withCreateFirewallRuleGroupResponse(openapisdk.models.shared.CreateFirewallRuleGroupResponse createFirewallRuleGroupResponse) {
        this.createFirewallRuleGroupResponse = createFirewallRuleGroupResponse;
        return this;
    }
    public Object internalServiceErrorException;
    public CreateFirewallRuleGroupResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public Object limitExceededException;
    public CreateFirewallRuleGroupResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Long statusCode;
    public CreateFirewallRuleGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CreateFirewallRuleGroupResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public CreateFirewallRuleGroupResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}