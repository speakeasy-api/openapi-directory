package openapisdk.models.operations;



public class DescribeSubscriptionResponse {
    public String contentType;
    public DescribeSubscriptionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeSubscriptionResponse describeSubscriptionResponse;
    public DescribeSubscriptionResponse withDescribeSubscriptionResponse(openapisdk.models.shared.DescribeSubscriptionResponse describeSubscriptionResponse) {
        this.describeSubscriptionResponse = describeSubscriptionResponse;
        return this;
    }
    public Object internalErrorException;
    public DescribeSubscriptionResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeSubscriptionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeSubscriptionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}