package openapisdk.models.operations;



public class DescribeEc2InstanceLimitsResponse {
    public String contentType;
    public DescribeEc2InstanceLimitsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeEc2InstanceLimitsOutput describeEc2InstanceLimitsOutput;
    public DescribeEc2InstanceLimitsResponse withDescribeEc2InstanceLimitsOutput(openapisdk.models.shared.DescribeEc2InstanceLimitsOutput describeEc2InstanceLimitsOutput) {
        this.describeEc2InstanceLimitsOutput = describeEc2InstanceLimitsOutput;
        return this;
    }
    public Object internalServiceException;
    public DescribeEc2InstanceLimitsResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidRequestException;
    public DescribeEc2InstanceLimitsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public DescribeEc2InstanceLimitsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public DescribeEc2InstanceLimitsResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}