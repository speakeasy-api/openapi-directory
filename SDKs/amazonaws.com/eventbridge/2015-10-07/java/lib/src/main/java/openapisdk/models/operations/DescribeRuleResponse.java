package openapisdk.models.operations;



public class DescribeRuleResponse {
    public String contentType;
    public DescribeRuleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeRuleResponse describeRuleResponse;
    public DescribeRuleResponse withDescribeRuleResponse(openapisdk.models.shared.DescribeRuleResponse describeRuleResponse) {
        this.describeRuleResponse = describeRuleResponse;
        return this;
    }
    public Object internalException;
    public DescribeRuleResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeRuleResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeRuleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}