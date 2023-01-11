package openapisdk.models.operations;



public class DescribeDirectoryConfigsResponse {
    public String contentType;
    public DescribeDirectoryConfigsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeDirectoryConfigsResult describeDirectoryConfigsResult;
    public DescribeDirectoryConfigsResponse withDescribeDirectoryConfigsResult(openapisdk.models.shared.DescribeDirectoryConfigsResult describeDirectoryConfigsResult) {
        this.describeDirectoryConfigsResult = describeDirectoryConfigsResult;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeDirectoryConfigsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeDirectoryConfigsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}