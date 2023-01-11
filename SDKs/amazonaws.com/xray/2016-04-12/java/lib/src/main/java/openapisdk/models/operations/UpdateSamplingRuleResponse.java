package openapisdk.models.operations;



public class UpdateSamplingRuleResponse {
    public String contentType;
    public UpdateSamplingRuleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidRequestException;
    public UpdateSamplingRuleResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public UpdateSamplingRuleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttledException;
    public UpdateSamplingRuleResponse withThrottledException(Object throttledException) {
        this.throttledException = throttledException;
        return this;
    }
    public openapisdk.models.shared.UpdateSamplingRuleResult updateSamplingRuleResult;
    public UpdateSamplingRuleResponse withUpdateSamplingRuleResult(openapisdk.models.shared.UpdateSamplingRuleResult updateSamplingRuleResult) {
        this.updateSamplingRuleResult = updateSamplingRuleResult;
        return this;
    }
}