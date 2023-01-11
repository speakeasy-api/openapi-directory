package openapisdk.models.operations;



public class DescribeWorldResponse {
    public String contentType;
    public DescribeWorldResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeWorldResponse describeWorldResponse;
    public DescribeWorldResponse withDescribeWorldResponse(openapisdk.models.shared.DescribeWorldResponse describeWorldResponse) {
        this.describeWorldResponse = describeWorldResponse;
        return this;
    }
    public Object internalServerException;
    public DescribeWorldResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidParameterException;
    public DescribeWorldResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeWorldResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeWorldResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeWorldResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}