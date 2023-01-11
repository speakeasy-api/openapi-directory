package openapisdk.models.operations;



public class DescribeStreamProcessorResponse {
    public Object accessDeniedException;
    public DescribeStreamProcessorResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DescribeStreamProcessorResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeStreamProcessorResponse describeStreamProcessorResponse;
    public DescribeStreamProcessorResponse withDescribeStreamProcessorResponse(openapisdk.models.shared.DescribeStreamProcessorResponse describeStreamProcessorResponse) {
        this.describeStreamProcessorResponse = describeStreamProcessorResponse;
        return this;
    }
    public Object internalServerError;
    public DescribeStreamProcessorResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Object invalidParameterException;
    public DescribeStreamProcessorResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object provisionedThroughputExceededException;
    public DescribeStreamProcessorResponse withProvisionedThroughputExceededException(Object provisionedThroughputExceededException) {
        this.provisionedThroughputExceededException = provisionedThroughputExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeStreamProcessorResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeStreamProcessorResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeStreamProcessorResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}