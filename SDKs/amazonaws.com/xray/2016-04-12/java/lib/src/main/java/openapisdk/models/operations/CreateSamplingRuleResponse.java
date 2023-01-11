package openapisdk.models.operations;



public class CreateSamplingRuleResponse {
    public String contentType;
    public CreateSamplingRuleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateSamplingRuleResult createSamplingRuleResult;
    public CreateSamplingRuleResponse withCreateSamplingRuleResult(openapisdk.models.shared.CreateSamplingRuleResult createSamplingRuleResult) {
        this.createSamplingRuleResult = createSamplingRuleResult;
        return this;
    }
    public Object invalidRequestException;
    public CreateSamplingRuleResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object ruleLimitExceededException;
    public CreateSamplingRuleResponse withRuleLimitExceededException(Object ruleLimitExceededException) {
        this.ruleLimitExceededException = ruleLimitExceededException;
        return this;
    }
    public Long statusCode;
    public CreateSamplingRuleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttledException;
    public CreateSamplingRuleResponse withThrottledException(Object throttledException) {
        this.throttledException = throttledException;
        return this;
    }
}