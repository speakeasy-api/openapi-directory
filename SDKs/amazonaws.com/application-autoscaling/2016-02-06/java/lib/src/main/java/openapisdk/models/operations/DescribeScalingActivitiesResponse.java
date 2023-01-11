package openapisdk.models.operations;



public class DescribeScalingActivitiesResponse {
    public Object concurrentUpdateException;
    public DescribeScalingActivitiesResponse withConcurrentUpdateException(Object concurrentUpdateException) {
        this.concurrentUpdateException = concurrentUpdateException;
        return this;
    }
    public String contentType;
    public DescribeScalingActivitiesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeScalingActivitiesResponse describeScalingActivitiesResponse;
    public DescribeScalingActivitiesResponse withDescribeScalingActivitiesResponse(openapisdk.models.shared.DescribeScalingActivitiesResponse describeScalingActivitiesResponse) {
        this.describeScalingActivitiesResponse = describeScalingActivitiesResponse;
        return this;
    }
    public Object internalServiceException;
    public DescribeScalingActivitiesResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidNextTokenException;
    public DescribeScalingActivitiesResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public Long statusCode;
    public DescribeScalingActivitiesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DescribeScalingActivitiesResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}