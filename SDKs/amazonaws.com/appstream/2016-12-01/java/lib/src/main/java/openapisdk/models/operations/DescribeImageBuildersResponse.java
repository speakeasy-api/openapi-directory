package openapisdk.models.operations;



public class DescribeImageBuildersResponse {
    public String contentType;
    public DescribeImageBuildersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeImageBuildersResult describeImageBuildersResult;
    public DescribeImageBuildersResponse withDescribeImageBuildersResult(openapisdk.models.shared.DescribeImageBuildersResult describeImageBuildersResult) {
        this.describeImageBuildersResult = describeImageBuildersResult;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeImageBuildersResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeImageBuildersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}