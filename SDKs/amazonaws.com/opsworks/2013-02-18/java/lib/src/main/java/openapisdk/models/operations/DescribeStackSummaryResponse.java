package openapisdk.models.operations;



public class DescribeStackSummaryResponse {
    public String contentType;
    public DescribeStackSummaryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeStackSummaryResult describeStackSummaryResult;
    public DescribeStackSummaryResponse withDescribeStackSummaryResult(openapisdk.models.shared.DescribeStackSummaryResult describeStackSummaryResult) {
        this.describeStackSummaryResult = describeStackSummaryResult;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeStackSummaryResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeStackSummaryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DescribeStackSummaryResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}