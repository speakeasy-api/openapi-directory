package openapisdk.models.operations;



public class DescribeStreamConsumerResponse {
    public String contentType;
    public DescribeStreamConsumerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeStreamConsumerOutput describeStreamConsumerOutput;
    public DescribeStreamConsumerResponse withDescribeStreamConsumerOutput(openapisdk.models.shared.DescribeStreamConsumerOutput describeStreamConsumerOutput) {
        this.describeStreamConsumerOutput = describeStreamConsumerOutput;
        return this;
    }
    public Object invalidArgumentException;
    public DescribeStreamConsumerResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Object limitExceededException;
    public DescribeStreamConsumerResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeStreamConsumerResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeStreamConsumerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}