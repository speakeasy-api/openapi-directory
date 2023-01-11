package openapisdk.models.operations;



public class DescribeImportResponse {
    public String contentType;
    public DescribeImportResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeImportResponse describeImportResponse;
    public DescribeImportResponse withDescribeImportResponse(openapisdk.models.shared.DescribeImportResponse describeImportResponse) {
        this.describeImportResponse = describeImportResponse;
        return this;
    }
    public Object internalServerException;
    public DescribeImportResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeImportResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeImportResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeImportResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DescribeImportResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}