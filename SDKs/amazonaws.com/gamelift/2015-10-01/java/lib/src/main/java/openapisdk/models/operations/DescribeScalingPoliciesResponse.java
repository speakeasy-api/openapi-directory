package openapisdk.models.operations;



public class DescribeScalingPoliciesResponse {
    public String contentType;
    public DescribeScalingPoliciesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeScalingPoliciesOutput describeScalingPoliciesOutput;
    public DescribeScalingPoliciesResponse withDescribeScalingPoliciesOutput(openapisdk.models.shared.DescribeScalingPoliciesOutput describeScalingPoliciesOutput) {
        this.describeScalingPoliciesOutput = describeScalingPoliciesOutput;
        return this;
    }
    public Object internalServiceException;
    public DescribeScalingPoliciesResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidRequestException;
    public DescribeScalingPoliciesResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object notFoundException;
    public DescribeScalingPoliciesResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeScalingPoliciesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public DescribeScalingPoliciesResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}