package openapisdk.models.operations;



public class TagResourceResponse {
    public Object accessPointNotFound;
    public TagResourceResponse withAccessPointNotFound(Object accessPointNotFound) {
        this.accessPointNotFound = accessPointNotFound;
        return this;
    }
    public Object badRequest;
    public TagResourceResponse withBadRequest(Object badRequest) {
        this.badRequest = badRequest;
        return this;
    }
    public String contentType;
    public TagResourceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object fileSystemNotFound;
    public TagResourceResponse withFileSystemNotFound(Object fileSystemNotFound) {
        this.fileSystemNotFound = fileSystemNotFound;
        return this;
    }
    public Object internalServerError;
    public TagResourceResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Long statusCode;
    public TagResourceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}