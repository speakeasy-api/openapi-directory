package openapisdk.models.operations;



public class DescribeFileSystemsResponse {
    public Object badRequest;
    public DescribeFileSystemsResponse withBadRequest(Object badRequest) {
        this.badRequest = badRequest;
        return this;
    }
    public String contentType;
    public DescribeFileSystemsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeFileSystemsResponse describeFileSystemsResponse;
    public DescribeFileSystemsResponse withDescribeFileSystemsResponse(openapisdk.models.shared.DescribeFileSystemsResponse describeFileSystemsResponse) {
        this.describeFileSystemsResponse = describeFileSystemsResponse;
        return this;
    }
    public Object fileSystemNotFound;
    public DescribeFileSystemsResponse withFileSystemNotFound(Object fileSystemNotFound) {
        this.fileSystemNotFound = fileSystemNotFound;
        return this;
    }
    public Object internalServerError;
    public DescribeFileSystemsResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Long statusCode;
    public DescribeFileSystemsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}