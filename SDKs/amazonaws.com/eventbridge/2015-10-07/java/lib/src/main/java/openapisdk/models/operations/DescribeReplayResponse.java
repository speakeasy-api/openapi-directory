package openapisdk.models.operations;



public class DescribeReplayResponse {
    public String contentType;
    public DescribeReplayResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeReplayResponse describeReplayResponse;
    public DescribeReplayResponse withDescribeReplayResponse(openapisdk.models.shared.DescribeReplayResponse describeReplayResponse) {
        this.describeReplayResponse = describeReplayResponse;
        return this;
    }
    public Object internalException;
    public DescribeReplayResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeReplayResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeReplayResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}