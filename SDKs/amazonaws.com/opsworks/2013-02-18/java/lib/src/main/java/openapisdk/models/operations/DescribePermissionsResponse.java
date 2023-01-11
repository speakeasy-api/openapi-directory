package openapisdk.models.operations;



public class DescribePermissionsResponse {
    public String contentType;
    public DescribePermissionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribePermissionsResult describePermissionsResult;
    public DescribePermissionsResponse withDescribePermissionsResult(openapisdk.models.shared.DescribePermissionsResult describePermissionsResult) {
        this.describePermissionsResult = describePermissionsResult;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribePermissionsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribePermissionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DescribePermissionsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}