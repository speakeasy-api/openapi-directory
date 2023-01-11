package openapisdk.models.operations;



public class DescribeStreamResponse {
    public String contentType;
    public DescribeStreamResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeStreamOutput describeStreamOutput;
    public DescribeStreamResponse withDescribeStreamOutput(openapisdk.models.shared.DescribeStreamOutput describeStreamOutput) {
        this.describeStreamOutput = describeStreamOutput;
        return this;
    }
    public Object limitExceededException;
    public DescribeStreamResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeStreamResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeStreamResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}