package openapisdk.models.operations;



public class DescribeClusterResponse {
    public Object accessDeniedException;
    public DescribeClusterResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public DescribeClusterResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public DescribeClusterResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeClusterResponse describeClusterResponse;
    public DescribeClusterResponse withDescribeClusterResponse(openapisdk.models.shared.DescribeClusterResponse describeClusterResponse) {
        this.describeClusterResponse = describeClusterResponse;
        return this;
    }
    public Object internalServerException;
    public DescribeClusterResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeClusterResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeClusterResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeClusterResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DescribeClusterResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}