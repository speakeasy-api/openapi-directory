package openapisdk.models.operations;



public class DescribeAuditSuppressionResponse {
    public String contentType;
    public DescribeAuditSuppressionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeAuditSuppressionResponse describeAuditSuppressionResponse;
    public DescribeAuditSuppressionResponse withDescribeAuditSuppressionResponse(openapisdk.models.shared.DescribeAuditSuppressionResponse describeAuditSuppressionResponse) {
        this.describeAuditSuppressionResponse = describeAuditSuppressionResponse;
        return this;
    }
    public Object internalFailureException;
    public DescribeAuditSuppressionResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public DescribeAuditSuppressionResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeAuditSuppressionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeAuditSuppressionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeAuditSuppressionResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}