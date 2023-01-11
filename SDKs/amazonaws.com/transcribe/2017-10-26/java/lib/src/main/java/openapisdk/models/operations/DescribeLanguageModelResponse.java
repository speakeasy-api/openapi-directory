package openapisdk.models.operations;



public class DescribeLanguageModelResponse {
    public Object badRequestException;
    public DescribeLanguageModelResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public DescribeLanguageModelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeLanguageModelResponse describeLanguageModelResponse;
    public DescribeLanguageModelResponse withDescribeLanguageModelResponse(openapisdk.models.shared.DescribeLanguageModelResponse describeLanguageModelResponse) {
        this.describeLanguageModelResponse = describeLanguageModelResponse;
        return this;
    }
    public Object internalFailureException;
    public DescribeLanguageModelResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object limitExceededException;
    public DescribeLanguageModelResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notFoundException;
    public DescribeLanguageModelResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeLanguageModelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}