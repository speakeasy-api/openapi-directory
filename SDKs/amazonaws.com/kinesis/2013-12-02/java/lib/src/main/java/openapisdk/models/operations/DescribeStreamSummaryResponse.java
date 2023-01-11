package openapisdk.models.operations;



public class DescribeStreamSummaryResponse {
    public String contentType;
    public DescribeStreamSummaryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeStreamSummaryOutput describeStreamSummaryOutput;
    public DescribeStreamSummaryResponse withDescribeStreamSummaryOutput(openapisdk.models.shared.DescribeStreamSummaryOutput describeStreamSummaryOutput) {
        this.describeStreamSummaryOutput = describeStreamSummaryOutput;
        return this;
    }
    public Object limitExceededException;
    public DescribeStreamSummaryResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeStreamSummaryResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeStreamSummaryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}