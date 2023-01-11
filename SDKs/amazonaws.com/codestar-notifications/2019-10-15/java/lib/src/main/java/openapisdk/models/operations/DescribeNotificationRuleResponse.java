package openapisdk.models.operations;



public class DescribeNotificationRuleResponse {
    public String contentType;
    public DescribeNotificationRuleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeNotificationRuleResult describeNotificationRuleResult;
    public DescribeNotificationRuleResponse withDescribeNotificationRuleResult(openapisdk.models.shared.DescribeNotificationRuleResult describeNotificationRuleResult) {
        this.describeNotificationRuleResult = describeNotificationRuleResult;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeNotificationRuleResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeNotificationRuleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DescribeNotificationRuleResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}