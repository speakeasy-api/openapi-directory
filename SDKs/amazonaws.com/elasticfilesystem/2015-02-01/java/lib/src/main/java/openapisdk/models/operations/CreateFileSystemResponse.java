package openapisdk.models.operations;



public class CreateFileSystemResponse {
    public Object badRequest;
    public CreateFileSystemResponse withBadRequest(Object badRequest) {
        this.badRequest = badRequest;
        return this;
    }
    public String contentType;
    public CreateFileSystemResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object fileSystemAlreadyExists;
    public CreateFileSystemResponse withFileSystemAlreadyExists(Object fileSystemAlreadyExists) {
        this.fileSystemAlreadyExists = fileSystemAlreadyExists;
        return this;
    }
    public openapisdk.models.shared.FileSystemDescription fileSystemDescription;
    public CreateFileSystemResponse withFileSystemDescription(openapisdk.models.shared.FileSystemDescription fileSystemDescription) {
        this.fileSystemDescription = fileSystemDescription;
        return this;
    }
    public Object fileSystemLimitExceeded;
    public CreateFileSystemResponse withFileSystemLimitExceeded(Object fileSystemLimitExceeded) {
        this.fileSystemLimitExceeded = fileSystemLimitExceeded;
        return this;
    }
    public Object insufficientThroughputCapacity;
    public CreateFileSystemResponse withInsufficientThroughputCapacity(Object insufficientThroughputCapacity) {
        this.insufficientThroughputCapacity = insufficientThroughputCapacity;
        return this;
    }
    public Object internalServerError;
    public CreateFileSystemResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Long statusCode;
    public CreateFileSystemResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throughputLimitExceeded;
    public CreateFileSystemResponse withThroughputLimitExceeded(Object throughputLimitExceeded) {
        this.throughputLimitExceeded = throughputLimitExceeded;
        return this;
    }
    public Object unsupportedAvailabilityZone;
    public CreateFileSystemResponse withUnsupportedAvailabilityZone(Object unsupportedAvailabilityZone) {
        this.unsupportedAvailabilityZone = unsupportedAvailabilityZone;
        return this;
    }
}