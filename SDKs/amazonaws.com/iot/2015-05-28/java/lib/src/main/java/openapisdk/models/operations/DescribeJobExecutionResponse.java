package openapisdk.models.operations;



public class DescribeJobExecutionResponse {
    public String contentType;
    public DescribeJobExecutionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeJobExecutionResponse describeJobExecutionResponse;
    public DescribeJobExecutionResponse withDescribeJobExecutionResponse(openapisdk.models.shared.DescribeJobExecutionResponse describeJobExecutionResponse) {
        this.describeJobExecutionResponse = describeJobExecutionResponse;
        return this;
    }
    public Object invalidRequestException;
    public DescribeJobExecutionResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeJobExecutionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public DescribeJobExecutionResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public DescribeJobExecutionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeJobExecutionResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}