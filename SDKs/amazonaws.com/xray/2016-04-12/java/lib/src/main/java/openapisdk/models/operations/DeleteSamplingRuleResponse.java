package openapisdk.models.operations;



public class DeleteSamplingRuleResponse {
    public String contentType;
    public DeleteSamplingRuleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteSamplingRuleResult deleteSamplingRuleResult;
    public DeleteSamplingRuleResponse withDeleteSamplingRuleResult(openapisdk.models.shared.DeleteSamplingRuleResult deleteSamplingRuleResult) {
        this.deleteSamplingRuleResult = deleteSamplingRuleResult;
        return this;
    }
    public Object invalidRequestException;
    public DeleteSamplingRuleResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public DeleteSamplingRuleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttledException;
    public DeleteSamplingRuleResponse withThrottledException(Object throttledException) {
        this.throttledException = throttledException;
        return this;
    }
}