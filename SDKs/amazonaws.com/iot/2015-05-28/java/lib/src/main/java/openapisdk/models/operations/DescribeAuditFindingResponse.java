package openapisdk.models.operations;



public class DescribeAuditFindingResponse {
    public String contentType;
    public DescribeAuditFindingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeAuditFindingResponse describeAuditFindingResponse;
    public DescribeAuditFindingResponse withDescribeAuditFindingResponse(openapisdk.models.shared.DescribeAuditFindingResponse describeAuditFindingResponse) {
        this.describeAuditFindingResponse = describeAuditFindingResponse;
        return this;
    }
    public Object internalFailureException;
    public DescribeAuditFindingResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public DescribeAuditFindingResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeAuditFindingResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeAuditFindingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeAuditFindingResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}