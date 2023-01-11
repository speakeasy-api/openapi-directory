package openapisdk.models.operations;



public class DescribeDetectMitigationActionsTaskResponse {
    public String contentType;
    public DescribeDetectMitigationActionsTaskResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeDetectMitigationActionsTaskResponse describeDetectMitigationActionsTaskResponse;
    public DescribeDetectMitigationActionsTaskResponse withDescribeDetectMitigationActionsTaskResponse(openapisdk.models.shared.DescribeDetectMitigationActionsTaskResponse describeDetectMitigationActionsTaskResponse) {
        this.describeDetectMitigationActionsTaskResponse = describeDetectMitigationActionsTaskResponse;
        return this;
    }
    public Object internalFailureException;
    public DescribeDetectMitigationActionsTaskResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public DescribeDetectMitigationActionsTaskResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeDetectMitigationActionsTaskResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeDetectMitigationActionsTaskResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeDetectMitigationActionsTaskResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}