package openapisdk.models.operations;



public class DeleteFileSystemResponse {
    public Object badRequest;
    public DeleteFileSystemResponse withBadRequest(Object badRequest) {
        this.badRequest = badRequest;
        return this;
    }
    public String contentType;
    public DeleteFileSystemResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object fileSystemInUse;
    public DeleteFileSystemResponse withFileSystemInUse(Object fileSystemInUse) {
        this.fileSystemInUse = fileSystemInUse;
        return this;
    }
    public Object fileSystemNotFound;
    public DeleteFileSystemResponse withFileSystemNotFound(Object fileSystemNotFound) {
        this.fileSystemNotFound = fileSystemNotFound;
        return this;
    }
    public Object internalServerError;
    public DeleteFileSystemResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Long statusCode;
    public DeleteFileSystemResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}