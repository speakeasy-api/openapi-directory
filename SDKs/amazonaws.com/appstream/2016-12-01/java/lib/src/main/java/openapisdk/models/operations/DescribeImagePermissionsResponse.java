package openapisdk.models.operations;



public class DescribeImagePermissionsResponse {
    public String contentType;
    public DescribeImagePermissionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeImagePermissionsResult describeImagePermissionsResult;
    public DescribeImagePermissionsResponse withDescribeImagePermissionsResult(openapisdk.models.shared.DescribeImagePermissionsResult describeImagePermissionsResult) {
        this.describeImagePermissionsResult = describeImagePermissionsResult;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeImagePermissionsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeImagePermissionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}