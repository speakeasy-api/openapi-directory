package openapisdk.models.operations;



public class DescribeComplianceByConfigRuleResponse {
    public String contentType;
    public DescribeComplianceByConfigRuleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeComplianceByConfigRuleResponse describeComplianceByConfigRuleResponse;
    public DescribeComplianceByConfigRuleResponse withDescribeComplianceByConfigRuleResponse(openapisdk.models.shared.DescribeComplianceByConfigRuleResponse describeComplianceByConfigRuleResponse) {
        this.describeComplianceByConfigRuleResponse = describeComplianceByConfigRuleResponse;
        return this;
    }
    public Object invalidNextTokenException;
    public DescribeComplianceByConfigRuleResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public Object invalidParameterValueException;
    public DescribeComplianceByConfigRuleResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object noSuchConfigRuleException;
    public DescribeComplianceByConfigRuleResponse withNoSuchConfigRuleException(Object noSuchConfigRuleException) {
        this.noSuchConfigRuleException = noSuchConfigRuleException;
        return this;
    }
    public Long statusCode;
    public DescribeComplianceByConfigRuleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}