package openapisdk.models.operations;



public class DescribeProjectsResponse {
    public Object accessDeniedException;
    public DescribeProjectsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DescribeProjectsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeProjectsResponse describeProjectsResponse;
    public DescribeProjectsResponse withDescribeProjectsResponse(openapisdk.models.shared.DescribeProjectsResponse describeProjectsResponse) {
        this.describeProjectsResponse = describeProjectsResponse;
        return this;
    }
    public Object internalServerError;
    public DescribeProjectsResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Object invalidPaginationTokenException;
    public DescribeProjectsResponse withInvalidPaginationTokenException(Object invalidPaginationTokenException) {
        this.invalidPaginationTokenException = invalidPaginationTokenException;
        return this;
    }
    public Object invalidParameterException;
    public DescribeProjectsResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object provisionedThroughputExceededException;
    public DescribeProjectsResponse withProvisionedThroughputExceededException(Object provisionedThroughputExceededException) {
        this.provisionedThroughputExceededException = provisionedThroughputExceededException;
        return this;
    }
    public Long statusCode;
    public DescribeProjectsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeProjectsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}