package openapisdk.models.operations;



public class DescribeApplicationResponse {
    public String contentType;
    public DescribeApplicationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeApplicationResponse describeApplicationResponse;
    public DescribeApplicationResponse withDescribeApplicationResponse(openapisdk.models.shared.DescribeApplicationResponse describeApplicationResponse) {
        this.describeApplicationResponse = describeApplicationResponse;
        return this;
    }
    public Object internalServerException;
    public DescribeApplicationResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeApplicationResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeApplicationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DescribeApplicationResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}