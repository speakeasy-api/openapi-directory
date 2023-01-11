package openapisdk.models.operations;



public class DescribeAccessPointsResponse {
    public Object accessPointNotFound;
    public DescribeAccessPointsResponse withAccessPointNotFound(Object accessPointNotFound) {
        this.accessPointNotFound = accessPointNotFound;
        return this;
    }
    public Object badRequest;
    public DescribeAccessPointsResponse withBadRequest(Object badRequest) {
        this.badRequest = badRequest;
        return this;
    }
    public String contentType;
    public DescribeAccessPointsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeAccessPointsResponse describeAccessPointsResponse;
    public DescribeAccessPointsResponse withDescribeAccessPointsResponse(openapisdk.models.shared.DescribeAccessPointsResponse describeAccessPointsResponse) {
        this.describeAccessPointsResponse = describeAccessPointsResponse;
        return this;
    }
    public Object fileSystemNotFound;
    public DescribeAccessPointsResponse withFileSystemNotFound(Object fileSystemNotFound) {
        this.fileSystemNotFound = fileSystemNotFound;
        return this;
    }
    public Object internalServerError;
    public DescribeAccessPointsResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Long statusCode;
    public DescribeAccessPointsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}