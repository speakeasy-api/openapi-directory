package openapisdk.models.operations;



public class DescribeProjectResponse {
    public String contentType;
    public DescribeProjectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeProjectResponse describeProjectResponse;
    public DescribeProjectResponse withDescribeProjectResponse(openapisdk.models.shared.DescribeProjectResponse describeProjectResponse) {
        this.describeProjectResponse = describeProjectResponse;
        return this;
    }
    public Object internalFailureException;
    public DescribeProjectResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public DescribeProjectResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeProjectResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeProjectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeProjectResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}