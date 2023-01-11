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
    public Object invalidArgumentException;
    public DescribeApplicationResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Object invalidRequestException;
    public DescribeApplicationResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
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
}