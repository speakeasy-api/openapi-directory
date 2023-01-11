package openapisdk.models.operations;



public class DescribeScalingPlanResourcesResponse {
    public Object concurrentUpdateException;
    public DescribeScalingPlanResourcesResponse withConcurrentUpdateException(Object concurrentUpdateException) {
        this.concurrentUpdateException = concurrentUpdateException;
        return this;
    }
    public String contentType;
    public DescribeScalingPlanResourcesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeScalingPlanResourcesResponse describeScalingPlanResourcesResponse;
    public DescribeScalingPlanResourcesResponse withDescribeScalingPlanResourcesResponse(openapisdk.models.shared.DescribeScalingPlanResourcesResponse describeScalingPlanResourcesResponse) {
        this.describeScalingPlanResourcesResponse = describeScalingPlanResourcesResponse;
        return this;
    }
    public Object internalServiceException;
    public DescribeScalingPlanResourcesResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidNextTokenException;
    public DescribeScalingPlanResourcesResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public Long statusCode;
    public DescribeScalingPlanResourcesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DescribeScalingPlanResourcesResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}