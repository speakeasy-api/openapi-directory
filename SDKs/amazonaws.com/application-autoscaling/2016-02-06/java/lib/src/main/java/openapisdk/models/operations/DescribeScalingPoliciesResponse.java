package openapisdk.models.operations;



public class DescribeScalingPoliciesResponse {
    public Object concurrentUpdateException;
    public DescribeScalingPoliciesResponse withConcurrentUpdateException(Object concurrentUpdateException) {
        this.concurrentUpdateException = concurrentUpdateException;
        return this;
    }
    public String contentType;
    public DescribeScalingPoliciesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeScalingPoliciesResponse describeScalingPoliciesResponse;
    public DescribeScalingPoliciesResponse withDescribeScalingPoliciesResponse(openapisdk.models.shared.DescribeScalingPoliciesResponse describeScalingPoliciesResponse) {
        this.describeScalingPoliciesResponse = describeScalingPoliciesResponse;
        return this;
    }
    public Object failedResourceAccessException;
    public DescribeScalingPoliciesResponse withFailedResourceAccessException(Object failedResourceAccessException) {
        this.failedResourceAccessException = failedResourceAccessException;
        return this;
    }
    public Object internalServiceException;
    public DescribeScalingPoliciesResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidNextTokenException;
    public DescribeScalingPoliciesResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public Long statusCode;
    public DescribeScalingPoliciesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DescribeScalingPoliciesResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}