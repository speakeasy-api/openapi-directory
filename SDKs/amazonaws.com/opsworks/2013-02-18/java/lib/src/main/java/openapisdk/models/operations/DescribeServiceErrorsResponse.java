package openapisdk.models.operations;



public class DescribeServiceErrorsResponse {
    public String contentType;
    public DescribeServiceErrorsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeServiceErrorsResult describeServiceErrorsResult;
    public DescribeServiceErrorsResponse withDescribeServiceErrorsResult(openapisdk.models.shared.DescribeServiceErrorsResult describeServiceErrorsResult) {
        this.describeServiceErrorsResult = describeServiceErrorsResult;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeServiceErrorsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeServiceErrorsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DescribeServiceErrorsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}