package openapisdk.models.operations;



public class DescribeStacksResponse {
    public String contentType;
    public DescribeStacksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeStacksResult describeStacksResult;
    public DescribeStacksResponse withDescribeStacksResult(openapisdk.models.shared.DescribeStacksResult describeStacksResult) {
        this.describeStacksResult = describeStacksResult;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeStacksResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeStacksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DescribeStacksResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}