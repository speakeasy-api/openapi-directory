package openapisdk.models.operations;



public class DescribeAuditMitigationActionsTaskResponse {
    public String contentType;
    public DescribeAuditMitigationActionsTaskResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeAuditMitigationActionsTaskResponse describeAuditMitigationActionsTaskResponse;
    public DescribeAuditMitigationActionsTaskResponse withDescribeAuditMitigationActionsTaskResponse(openapisdk.models.shared.DescribeAuditMitigationActionsTaskResponse describeAuditMitigationActionsTaskResponse) {
        this.describeAuditMitigationActionsTaskResponse = describeAuditMitigationActionsTaskResponse;
        return this;
    }
    public Object internalFailureException;
    public DescribeAuditMitigationActionsTaskResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public DescribeAuditMitigationActionsTaskResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeAuditMitigationActionsTaskResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeAuditMitigationActionsTaskResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeAuditMitigationActionsTaskResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}