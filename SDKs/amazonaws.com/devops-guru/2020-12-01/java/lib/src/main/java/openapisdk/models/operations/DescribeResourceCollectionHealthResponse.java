package openapisdk.models.operations;



public class DescribeResourceCollectionHealthResponse {
    public Object accessDeniedException;
    public DescribeResourceCollectionHealthResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DescribeResourceCollectionHealthResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeResourceCollectionHealthResponse describeResourceCollectionHealthResponse;
    public DescribeResourceCollectionHealthResponse withDescribeResourceCollectionHealthResponse(openapisdk.models.shared.DescribeResourceCollectionHealthResponse describeResourceCollectionHealthResponse) {
        this.describeResourceCollectionHealthResponse = describeResourceCollectionHealthResponse;
        return this;
    }
    public Object internalServerException;
    public DescribeResourceCollectionHealthResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Long statusCode;
    public DescribeResourceCollectionHealthResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeResourceCollectionHealthResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DescribeResourceCollectionHealthResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}