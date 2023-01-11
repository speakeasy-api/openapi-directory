package openapisdk.models.operations;



public class DescribeScalableTargetsResponse {
    public Object concurrentUpdateException;
    public DescribeScalableTargetsResponse withConcurrentUpdateException(Object concurrentUpdateException) {
        this.concurrentUpdateException = concurrentUpdateException;
        return this;
    }
    public String contentType;
    public DescribeScalableTargetsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeScalableTargetsResponse describeScalableTargetsResponse;
    public DescribeScalableTargetsResponse withDescribeScalableTargetsResponse(openapisdk.models.shared.DescribeScalableTargetsResponse describeScalableTargetsResponse) {
        this.describeScalableTargetsResponse = describeScalableTargetsResponse;
        return this;
    }
    public Object internalServiceException;
    public DescribeScalableTargetsResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidNextTokenException;
    public DescribeScalableTargetsResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public Long statusCode;
    public DescribeScalableTargetsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DescribeScalableTargetsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}