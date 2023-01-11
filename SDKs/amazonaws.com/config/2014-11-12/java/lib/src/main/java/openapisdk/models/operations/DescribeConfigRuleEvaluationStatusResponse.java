package openapisdk.models.operations;



public class DescribeConfigRuleEvaluationStatusResponse {
    public String contentType;
    public DescribeConfigRuleEvaluationStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeConfigRuleEvaluationStatusResponse describeConfigRuleEvaluationStatusResponse;
    public DescribeConfigRuleEvaluationStatusResponse withDescribeConfigRuleEvaluationStatusResponse(openapisdk.models.shared.DescribeConfigRuleEvaluationStatusResponse describeConfigRuleEvaluationStatusResponse) {
        this.describeConfigRuleEvaluationStatusResponse = describeConfigRuleEvaluationStatusResponse;
        return this;
    }
    public Object invalidNextTokenException;
    public DescribeConfigRuleEvaluationStatusResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public Object invalidParameterValueException;
    public DescribeConfigRuleEvaluationStatusResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object noSuchConfigRuleException;
    public DescribeConfigRuleEvaluationStatusResponse withNoSuchConfigRuleException(Object noSuchConfigRuleException) {
        this.noSuchConfigRuleException = noSuchConfigRuleException;
        return this;
    }
    public Long statusCode;
    public DescribeConfigRuleEvaluationStatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}