package openapisdk.models.operations;



public class DescribeWorkflowResponse {
    public String contentType;
    public DescribeWorkflowResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeWorkflowResponse describeWorkflowResponse;
    public DescribeWorkflowResponse withDescribeWorkflowResponse(openapisdk.models.shared.DescribeWorkflowResponse describeWorkflowResponse) {
        this.describeWorkflowResponse = describeWorkflowResponse;
        return this;
    }
    public Object internalServiceError;
    public DescribeWorkflowResponse withInternalServiceError(Object internalServiceError) {
        this.internalServiceError = internalServiceError;
        return this;
    }
    public Object invalidRequestException;
    public DescribeWorkflowResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeWorkflowResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public DescribeWorkflowResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public DescribeWorkflowResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}