package openapisdk.models.operations;



public class DescribeTagsResponse {
    public String contentType;
    public DescribeTagsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeTagsResult describeTagsResult;
    public DescribeTagsResponse withDescribeTagsResult(openapisdk.models.shared.DescribeTagsResult describeTagsResult) {
        this.describeTagsResult = describeTagsResult;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeTagsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeTagsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}