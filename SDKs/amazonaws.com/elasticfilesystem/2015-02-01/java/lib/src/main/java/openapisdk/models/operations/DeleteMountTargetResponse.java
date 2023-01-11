package openapisdk.models.operations;



public class DeleteMountTargetResponse {
    public Object badRequest;
    public DeleteMountTargetResponse withBadRequest(Object badRequest) {
        this.badRequest = badRequest;
        return this;
    }
    public String contentType;
    public DeleteMountTargetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object dependencyTimeout;
    public DeleteMountTargetResponse withDependencyTimeout(Object dependencyTimeout) {
        this.dependencyTimeout = dependencyTimeout;
        return this;
    }
    public Object internalServerError;
    public DeleteMountTargetResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Object mountTargetNotFound;
    public DeleteMountTargetResponse withMountTargetNotFound(Object mountTargetNotFound) {
        this.mountTargetNotFound = mountTargetNotFound;
        return this;
    }
    public Long statusCode;
    public DeleteMountTargetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}