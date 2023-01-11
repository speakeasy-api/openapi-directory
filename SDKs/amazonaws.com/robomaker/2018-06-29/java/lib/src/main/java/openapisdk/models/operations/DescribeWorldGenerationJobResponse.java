package openapisdk.models.operations;



public class DescribeWorldGenerationJobResponse {
    public String contentType;
    public DescribeWorldGenerationJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeWorldGenerationJobResponse describeWorldGenerationJobResponse;
    public DescribeWorldGenerationJobResponse withDescribeWorldGenerationJobResponse(openapisdk.models.shared.DescribeWorldGenerationJobResponse describeWorldGenerationJobResponse) {
        this.describeWorldGenerationJobResponse = describeWorldGenerationJobResponse;
        return this;
    }
    public Object internalServerException;
    public DescribeWorldGenerationJobResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidParameterException;
    public DescribeWorldGenerationJobResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeWorldGenerationJobResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeWorldGenerationJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeWorldGenerationJobResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}