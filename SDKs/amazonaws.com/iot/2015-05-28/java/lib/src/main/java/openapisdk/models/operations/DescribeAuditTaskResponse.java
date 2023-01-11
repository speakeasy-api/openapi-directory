package openapisdk.models.operations;



public class DescribeAuditTaskResponse {
    public String contentType;
    public DescribeAuditTaskResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeAuditTaskResponse describeAuditTaskResponse;
    public DescribeAuditTaskResponse withDescribeAuditTaskResponse(openapisdk.models.shared.DescribeAuditTaskResponse describeAuditTaskResponse) {
        this.describeAuditTaskResponse = describeAuditTaskResponse;
        return this;
    }
    public Object internalFailureException;
    public DescribeAuditTaskResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public DescribeAuditTaskResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeAuditTaskResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeAuditTaskResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeAuditTaskResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}