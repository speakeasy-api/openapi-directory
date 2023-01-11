package openapisdk.models.operations;



public class DescribeWorldTemplateResponse {
    public String contentType;
    public DescribeWorldTemplateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeWorldTemplateResponse describeWorldTemplateResponse;
    public DescribeWorldTemplateResponse withDescribeWorldTemplateResponse(openapisdk.models.shared.DescribeWorldTemplateResponse describeWorldTemplateResponse) {
        this.describeWorldTemplateResponse = describeWorldTemplateResponse;
        return this;
    }
    public Object internalServerException;
    public DescribeWorldTemplateResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidParameterException;
    public DescribeWorldTemplateResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeWorldTemplateResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeWorldTemplateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeWorldTemplateResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}