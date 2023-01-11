package openapisdk.models.operations;



public class DescribePortalResponse {
    public String contentType;
    public DescribePortalResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribePortalResponse describePortalResponse;
    public DescribePortalResponse withDescribePortalResponse(openapisdk.models.shared.DescribePortalResponse describePortalResponse) {
        this.describePortalResponse = describePortalResponse;
        return this;
    }
    public Object internalFailureException;
    public DescribePortalResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public DescribePortalResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribePortalResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribePortalResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribePortalResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}