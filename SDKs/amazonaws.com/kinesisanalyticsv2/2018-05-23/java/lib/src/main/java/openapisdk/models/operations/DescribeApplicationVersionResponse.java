package openapisdk.models.operations;



public class DescribeApplicationVersionResponse {
    public String contentType;
    public DescribeApplicationVersionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeApplicationVersionResponse describeApplicationVersionResponse;
    public DescribeApplicationVersionResponse withDescribeApplicationVersionResponse(openapisdk.models.shared.DescribeApplicationVersionResponse describeApplicationVersionResponse) {
        this.describeApplicationVersionResponse = describeApplicationVersionResponse;
        return this;
    }
    public Object invalidArgumentException;
    public DescribeApplicationVersionResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeApplicationVersionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeApplicationVersionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unsupportedOperationException;
    public DescribeApplicationVersionResponse withUnsupportedOperationException(Object unsupportedOperationException) {
        this.unsupportedOperationException = unsupportedOperationException;
        return this;
    }
}