package openapisdk.models.operations;



public class PutEvaluationsResponse {
    public String contentType;
    public PutEvaluationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterValueException;
    public PutEvaluationsResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object invalidResultTokenException;
    public PutEvaluationsResponse withInvalidResultTokenException(Object invalidResultTokenException) {
        this.invalidResultTokenException = invalidResultTokenException;
        return this;
    }
    public Object noSuchConfigRuleException;
    public PutEvaluationsResponse withNoSuchConfigRuleException(Object noSuchConfigRuleException) {
        this.noSuchConfigRuleException = noSuchConfigRuleException;
        return this;
    }
    public openapisdk.models.shared.PutEvaluationsResponse putEvaluationsResponse;
    public PutEvaluationsResponse withPutEvaluationsResponse(openapisdk.models.shared.PutEvaluationsResponse putEvaluationsResponse) {
        this.putEvaluationsResponse = putEvaluationsResponse;
        return this;
    }
    public Long statusCode;
    public PutEvaluationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}