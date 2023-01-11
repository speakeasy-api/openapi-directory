package openapisdk.models.operations;



public class StartConfigRulesEvaluationResponse {
    public String contentType;
    public StartConfigRulesEvaluationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterValueException;
    public StartConfigRulesEvaluationResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object limitExceededException;
    public StartConfigRulesEvaluationResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object noSuchConfigRuleException;
    public StartConfigRulesEvaluationResponse withNoSuchConfigRuleException(Object noSuchConfigRuleException) {
        this.noSuchConfigRuleException = noSuchConfigRuleException;
        return this;
    }
    public Object resourceInUseException;
    public StartConfigRulesEvaluationResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public java.util.Map<String, Object> startConfigRulesEvaluationResponse;
    public StartConfigRulesEvaluationResponse withStartConfigRulesEvaluationResponse(java.util.Map<String, Object> startConfigRulesEvaluationResponse) {
        this.startConfigRulesEvaluationResponse = startConfigRulesEvaluationResponse;
        return this;
    }
    public Long statusCode;
    public StartConfigRulesEvaluationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}