package openapisdk.models.operations;



public class DescribeTagsResponse {
    public Object badRequest;
    public DescribeTagsResponse withBadRequest(Object badRequest) {
        this.badRequest = badRequest;
        return this;
    }
    public String contentType;
    public DescribeTagsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeTagsResponse describeTagsResponse;
    public DescribeTagsResponse withDescribeTagsResponse(openapisdk.models.shared.DescribeTagsResponse describeTagsResponse) {
        this.describeTagsResponse = describeTagsResponse;
        return this;
    }
    public Object fileSystemNotFound;
    public DescribeTagsResponse withFileSystemNotFound(Object fileSystemNotFound) {
        this.fileSystemNotFound = fileSystemNotFound;
        return this;
    }
    public Object internalServerError;
    public DescribeTagsResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Long statusCode;
    public DescribeTagsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}