package openapisdk.models.operations;



public class DescribeScheduledAuditResponse {
    public String contentType;
    public DescribeScheduledAuditResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeScheduledAuditResponse describeScheduledAuditResponse;
    public DescribeScheduledAuditResponse withDescribeScheduledAuditResponse(openapisdk.models.shared.DescribeScheduledAuditResponse describeScheduledAuditResponse) {
        this.describeScheduledAuditResponse = describeScheduledAuditResponse;
        return this;
    }
    public Object internalFailureException;
    public DescribeScheduledAuditResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public DescribeScheduledAuditResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeScheduledAuditResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeScheduledAuditResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeScheduledAuditResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}