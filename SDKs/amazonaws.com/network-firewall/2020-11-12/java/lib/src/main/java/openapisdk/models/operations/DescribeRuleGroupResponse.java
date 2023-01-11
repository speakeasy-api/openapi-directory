package openapisdk.models.operations;



public class DescribeRuleGroupResponse {
    public String contentType;
    public DescribeRuleGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeRuleGroupResponse describeRuleGroupResponse;
    public DescribeRuleGroupResponse withDescribeRuleGroupResponse(openapisdk.models.shared.DescribeRuleGroupResponse describeRuleGroupResponse) {
        this.describeRuleGroupResponse = describeRuleGroupResponse;
        return this;
    }
    public Object internalServerError;
    public DescribeRuleGroupResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Object invalidRequestException;
    public DescribeRuleGroupResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeRuleGroupResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeRuleGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeRuleGroupResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}