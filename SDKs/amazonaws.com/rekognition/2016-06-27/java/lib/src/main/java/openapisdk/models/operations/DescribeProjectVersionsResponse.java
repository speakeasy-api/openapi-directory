package openapisdk.models.operations;



public class DescribeProjectVersionsResponse {
    public Object accessDeniedException;
    public DescribeProjectVersionsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DescribeProjectVersionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeProjectVersionsResponse describeProjectVersionsResponse;
    public DescribeProjectVersionsResponse withDescribeProjectVersionsResponse(openapisdk.models.shared.DescribeProjectVersionsResponse describeProjectVersionsResponse) {
        this.describeProjectVersionsResponse = describeProjectVersionsResponse;
        return this;
    }
    public Object internalServerError;
    public DescribeProjectVersionsResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Object invalidPaginationTokenException;
    public DescribeProjectVersionsResponse withInvalidPaginationTokenException(Object invalidPaginationTokenException) {
        this.invalidPaginationTokenException = invalidPaginationTokenException;
        return this;
    }
    public Object invalidParameterException;
    public DescribeProjectVersionsResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object provisionedThroughputExceededException;
    public DescribeProjectVersionsResponse withProvisionedThroughputExceededException(Object provisionedThroughputExceededException) {
        this.provisionedThroughputExceededException = provisionedThroughputExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeProjectVersionsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeProjectVersionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeProjectVersionsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}