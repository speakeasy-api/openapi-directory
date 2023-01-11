package openapisdk.models.operations;



public class DescribeExecutionResponse {
    public String contentType;
    public DescribeExecutionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeExecutionResponse describeExecutionResponse;
    public DescribeExecutionResponse withDescribeExecutionResponse(openapisdk.models.shared.DescribeExecutionResponse describeExecutionResponse) {
        this.describeExecutionResponse = describeExecutionResponse;
        return this;
    }
    public Object internalServiceError;
    public DescribeExecutionResponse withInternalServiceError(Object internalServiceError) {
        this.internalServiceError = internalServiceError;
        return this;
    }
    public Object invalidRequestException;
    public DescribeExecutionResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeExecutionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public DescribeExecutionResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public DescribeExecutionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}