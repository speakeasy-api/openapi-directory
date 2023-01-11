package openapisdk.models.operations;



public class DescribeWorldExportJobResponse {
    public String contentType;
    public DescribeWorldExportJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeWorldExportJobResponse describeWorldExportJobResponse;
    public DescribeWorldExportJobResponse withDescribeWorldExportJobResponse(openapisdk.models.shared.DescribeWorldExportJobResponse describeWorldExportJobResponse) {
        this.describeWorldExportJobResponse = describeWorldExportJobResponse;
        return this;
    }
    public Object internalServerException;
    public DescribeWorldExportJobResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidParameterException;
    public DescribeWorldExportJobResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeWorldExportJobResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeWorldExportJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeWorldExportJobResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}