package openapisdk.models.operations;



public class DescribeUsageReportSubscriptionsResponse {
    public String contentType;
    public DescribeUsageReportSubscriptionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeUsageReportSubscriptionsResult describeUsageReportSubscriptionsResult;
    public DescribeUsageReportSubscriptionsResponse withDescribeUsageReportSubscriptionsResult(openapisdk.models.shared.DescribeUsageReportSubscriptionsResult describeUsageReportSubscriptionsResult) {
        this.describeUsageReportSubscriptionsResult = describeUsageReportSubscriptionsResult;
        return this;
    }
    public Object invalidAccountStatusException;
    public DescribeUsageReportSubscriptionsResponse withInvalidAccountStatusException(Object invalidAccountStatusException) {
        this.invalidAccountStatusException = invalidAccountStatusException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeUsageReportSubscriptionsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeUsageReportSubscriptionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}