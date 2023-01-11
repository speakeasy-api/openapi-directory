package openapisdk.models.operations;



public class DescribeMountTargetsResponse {
    public Object accessPointNotFound;
    public DescribeMountTargetsResponse withAccessPointNotFound(Object accessPointNotFound) {
        this.accessPointNotFound = accessPointNotFound;
        return this;
    }
    public Object badRequest;
    public DescribeMountTargetsResponse withBadRequest(Object badRequest) {
        this.badRequest = badRequest;
        return this;
    }
    public String contentType;
    public DescribeMountTargetsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeMountTargetsResponse describeMountTargetsResponse;
    public DescribeMountTargetsResponse withDescribeMountTargetsResponse(openapisdk.models.shared.DescribeMountTargetsResponse describeMountTargetsResponse) {
        this.describeMountTargetsResponse = describeMountTargetsResponse;
        return this;
    }
    public Object fileSystemNotFound;
    public DescribeMountTargetsResponse withFileSystemNotFound(Object fileSystemNotFound) {
        this.fileSystemNotFound = fileSystemNotFound;
        return this;
    }
    public Object internalServerError;
    public DescribeMountTargetsResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Object mountTargetNotFound;
    public DescribeMountTargetsResponse withMountTargetNotFound(Object mountTargetNotFound) {
        this.mountTargetNotFound = mountTargetNotFound;
        return this;
    }
    public Long statusCode;
    public DescribeMountTargetsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}