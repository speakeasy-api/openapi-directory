package openapisdk.models.operations;



public class PutLifecycleConfigurationResponse {
    public Object badRequest;
    public PutLifecycleConfigurationResponse withBadRequest(Object badRequest) {
        this.badRequest = badRequest;
        return this;
    }
    public String contentType;
    public PutLifecycleConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object fileSystemNotFound;
    public PutLifecycleConfigurationResponse withFileSystemNotFound(Object fileSystemNotFound) {
        this.fileSystemNotFound = fileSystemNotFound;
        return this;
    }
    public Object incorrectFileSystemLifeCycleState;
    public PutLifecycleConfigurationResponse withIncorrectFileSystemLifeCycleState(Object incorrectFileSystemLifeCycleState) {
        this.incorrectFileSystemLifeCycleState = incorrectFileSystemLifeCycleState;
        return this;
    }
    public Object internalServerError;
    public PutLifecycleConfigurationResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public openapisdk.models.shared.LifecycleConfigurationDescription lifecycleConfigurationDescription;
    public PutLifecycleConfigurationResponse withLifecycleConfigurationDescription(openapisdk.models.shared.LifecycleConfigurationDescription lifecycleConfigurationDescription) {
        this.lifecycleConfigurationDescription = lifecycleConfigurationDescription;
        return this;
    }
    public Long statusCode;
    public PutLifecycleConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}