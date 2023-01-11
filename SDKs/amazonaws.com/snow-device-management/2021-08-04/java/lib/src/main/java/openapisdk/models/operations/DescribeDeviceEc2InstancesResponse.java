package openapisdk.models.operations;



public class DescribeDeviceEc2InstancesResponse {
    public Object accessDeniedException;
    public DescribeDeviceEc2InstancesResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DescribeDeviceEc2InstancesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeDeviceEc2Output describeDeviceEc2Output;
    public DescribeDeviceEc2InstancesResponse withDescribeDeviceEc2Output(openapisdk.models.shared.DescribeDeviceEc2Output describeDeviceEc2Output) {
        this.describeDeviceEc2Output = describeDeviceEc2Output;
        return this;
    }
    public Object internalServerException;
    public DescribeDeviceEc2InstancesResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeDeviceEc2InstancesResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeDeviceEc2InstancesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeDeviceEc2InstancesResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DescribeDeviceEc2InstancesResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}