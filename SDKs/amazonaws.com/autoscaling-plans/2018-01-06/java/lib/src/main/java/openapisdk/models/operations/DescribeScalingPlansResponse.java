package openapisdk.models.operations;



public class DescribeScalingPlansResponse {
    public Object concurrentUpdateException;
    public DescribeScalingPlansResponse withConcurrentUpdateException(Object concurrentUpdateException) {
        this.concurrentUpdateException = concurrentUpdateException;
        return this;
    }
    public String contentType;
    public DescribeScalingPlansResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeScalingPlansResponse describeScalingPlansResponse;
    public DescribeScalingPlansResponse withDescribeScalingPlansResponse(openapisdk.models.shared.DescribeScalingPlansResponse describeScalingPlansResponse) {
        this.describeScalingPlansResponse = describeScalingPlansResponse;
        return this;
    }
    public Object internalServiceException;
    public DescribeScalingPlansResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidNextTokenException;
    public DescribeScalingPlansResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public Long statusCode;
    public DescribeScalingPlansResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DescribeScalingPlansResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}