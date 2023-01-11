package openapisdk.models.operations;



public class DescribeConfigRulesResponse {
    public String contentType;
    public DescribeConfigRulesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeConfigRulesResponse describeConfigRulesResponse;
    public DescribeConfigRulesResponse withDescribeConfigRulesResponse(openapisdk.models.shared.DescribeConfigRulesResponse describeConfigRulesResponse) {
        this.describeConfigRulesResponse = describeConfigRulesResponse;
        return this;
    }
    public Object invalidNextTokenException;
    public DescribeConfigRulesResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public Object noSuchConfigRuleException;
    public DescribeConfigRulesResponse withNoSuchConfigRuleException(Object noSuchConfigRuleException) {
        this.noSuchConfigRuleException = noSuchConfigRuleException;
        return this;
    }
    public Long statusCode;
    public DescribeConfigRulesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}