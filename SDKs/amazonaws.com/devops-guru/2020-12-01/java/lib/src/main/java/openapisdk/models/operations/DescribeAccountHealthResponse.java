package openapisdk.models.operations;



public class DescribeAccountHealthResponse {
    public Object accessDeniedException;
    public DescribeAccountHealthResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DescribeAccountHealthResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeAccountHealthResponse describeAccountHealthResponse;
    public DescribeAccountHealthResponse withDescribeAccountHealthResponse(openapisdk.models.shared.DescribeAccountHealthResponse describeAccountHealthResponse) {
        this.describeAccountHealthResponse = describeAccountHealthResponse;
        return this;
    }
    public Object internalServerException;
    public DescribeAccountHealthResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Long statusCode;
    public DescribeAccountHealthResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeAccountHealthResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DescribeAccountHealthResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}