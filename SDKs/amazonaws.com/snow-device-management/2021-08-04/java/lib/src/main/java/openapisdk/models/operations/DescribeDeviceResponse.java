package openapisdk.models.operations;



public class DescribeDeviceResponse {
    public Object accessDeniedException;
    public DescribeDeviceResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DescribeDeviceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeDeviceOutput describeDeviceOutput;
    public DescribeDeviceResponse withDescribeDeviceOutput(openapisdk.models.shared.DescribeDeviceOutput describeDeviceOutput) {
        this.describeDeviceOutput = describeDeviceOutput;
        return this;
    }
    public Object internalServerException;
    public DescribeDeviceResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeDeviceResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeDeviceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeDeviceResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DescribeDeviceResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}