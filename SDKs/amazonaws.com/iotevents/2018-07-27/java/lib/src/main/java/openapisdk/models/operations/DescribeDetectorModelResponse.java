package openapisdk.models.operations;



public class DescribeDetectorModelResponse {
    public String contentType;
    public DescribeDetectorModelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeDetectorModelResponse describeDetectorModelResponse;
    public DescribeDetectorModelResponse withDescribeDetectorModelResponse(openapisdk.models.shared.DescribeDetectorModelResponse describeDetectorModelResponse) {
        this.describeDetectorModelResponse = describeDetectorModelResponse;
        return this;
    }
    public Object internalFailureException;
    public DescribeDetectorModelResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public DescribeDetectorModelResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeDetectorModelResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public DescribeDetectorModelResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public DescribeDetectorModelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeDetectorModelResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}