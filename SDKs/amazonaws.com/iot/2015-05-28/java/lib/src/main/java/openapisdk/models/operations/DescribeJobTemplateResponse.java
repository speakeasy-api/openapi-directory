package openapisdk.models.operations;



public class DescribeJobTemplateResponse {
    public String contentType;
    public DescribeJobTemplateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeJobTemplateResponse describeJobTemplateResponse;
    public DescribeJobTemplateResponse withDescribeJobTemplateResponse(openapisdk.models.shared.DescribeJobTemplateResponse describeJobTemplateResponse) {
        this.describeJobTemplateResponse = describeJobTemplateResponse;
        return this;
    }
    public Object internalFailureException;
    public DescribeJobTemplateResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public DescribeJobTemplateResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeJobTemplateResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeJobTemplateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeJobTemplateResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}