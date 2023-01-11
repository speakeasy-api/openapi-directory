package openapisdk.models.operations;



public class CreateFirewallRuleResponse {
    public Object accessDeniedException;
    public CreateFirewallRuleResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public CreateFirewallRuleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateFirewallRuleResponse createFirewallRuleResponse;
    public CreateFirewallRuleResponse withCreateFirewallRuleResponse(openapisdk.models.shared.CreateFirewallRuleResponse createFirewallRuleResponse) {
        this.createFirewallRuleResponse = createFirewallRuleResponse;
        return this;
    }
    public Object internalServiceErrorException;
    public CreateFirewallRuleResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public Object limitExceededException;
    public CreateFirewallRuleResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateFirewallRuleResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public CreateFirewallRuleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CreateFirewallRuleResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public CreateFirewallRuleResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}