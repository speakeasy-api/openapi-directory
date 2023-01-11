package openapisdk.models.operations;



public class PutExternalEvaluationResponse {
    public String contentType;
    public PutExternalEvaluationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterValueException;
    public PutExternalEvaluationResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object noSuchConfigRuleException;
    public PutExternalEvaluationResponse withNoSuchConfigRuleException(Object noSuchConfigRuleException) {
        this.noSuchConfigRuleException = noSuchConfigRuleException;
        return this;
    }
    public java.util.Map<String, Object> putExternalEvaluationResponse;
    public PutExternalEvaluationResponse withPutExternalEvaluationResponse(java.util.Map<String, Object> putExternalEvaluationResponse) {
        this.putExternalEvaluationResponse = putExternalEvaluationResponse;
        return this;
    }
    public Long statusCode;
    public PutExternalEvaluationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}