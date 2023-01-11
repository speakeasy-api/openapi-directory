package openapisdk.models.operations;



public class DescribeExportResponse {
    public String contentType;
    public DescribeExportResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeExportResponse describeExportResponse;
    public DescribeExportResponse withDescribeExportResponse(openapisdk.models.shared.DescribeExportResponse describeExportResponse) {
        this.describeExportResponse = describeExportResponse;
        return this;
    }
    public Object internalServerException;
    public DescribeExportResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeExportResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeExportResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeExportResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DescribeExportResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}