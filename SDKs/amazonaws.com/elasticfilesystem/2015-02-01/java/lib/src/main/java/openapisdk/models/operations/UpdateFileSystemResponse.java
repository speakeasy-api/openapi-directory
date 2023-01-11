package openapisdk.models.operations;



public class UpdateFileSystemResponse {
    public Object badRequest;
    public UpdateFileSystemResponse withBadRequest(Object badRequest) {
        this.badRequest = badRequest;
        return this;
    }
    public String contentType;
    public UpdateFileSystemResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FileSystemDescription fileSystemDescription;
    public UpdateFileSystemResponse withFileSystemDescription(openapisdk.models.shared.FileSystemDescription fileSystemDescription) {
        this.fileSystemDescription = fileSystemDescription;
        return this;
    }
    public Object fileSystemNotFound;
    public UpdateFileSystemResponse withFileSystemNotFound(Object fileSystemNotFound) {
        this.fileSystemNotFound = fileSystemNotFound;
        return this;
    }
    public Object incorrectFileSystemLifeCycleState;
    public UpdateFileSystemResponse withIncorrectFileSystemLifeCycleState(Object incorrectFileSystemLifeCycleState) {
        this.incorrectFileSystemLifeCycleState = incorrectFileSystemLifeCycleState;
        return this;
    }
    public Object insufficientThroughputCapacity;
    public UpdateFileSystemResponse withInsufficientThroughputCapacity(Object insufficientThroughputCapacity) {
        this.insufficientThroughputCapacity = insufficientThroughputCapacity;
        return this;
    }
    public Object internalServerError;
    public UpdateFileSystemResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Long statusCode;
    public UpdateFileSystemResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throughputLimitExceeded;
    public UpdateFileSystemResponse withThroughputLimitExceeded(Object throughputLimitExceeded) {
        this.throughputLimitExceeded = throughputLimitExceeded;
        return this;
    }
    public Object tooManyRequests;
    public UpdateFileSystemResponse withTooManyRequests(Object tooManyRequests) {
        this.tooManyRequests = tooManyRequests;
        return this;
    }
}