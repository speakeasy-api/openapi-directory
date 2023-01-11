package openapisdk.models.operations;



public class CreateAccessPointResponse {
    public Object accessPointAlreadyExists;
    public CreateAccessPointResponse withAccessPointAlreadyExists(Object accessPointAlreadyExists) {
        this.accessPointAlreadyExists = accessPointAlreadyExists;
        return this;
    }
    public openapisdk.models.shared.AccessPointDescription accessPointDescription;
    public CreateAccessPointResponse withAccessPointDescription(openapisdk.models.shared.AccessPointDescription accessPointDescription) {
        this.accessPointDescription = accessPointDescription;
        return this;
    }
    public Object accessPointLimitExceeded;
    public CreateAccessPointResponse withAccessPointLimitExceeded(Object accessPointLimitExceeded) {
        this.accessPointLimitExceeded = accessPointLimitExceeded;
        return this;
    }
    public Object badRequest;
    public CreateAccessPointResponse withBadRequest(Object badRequest) {
        this.badRequest = badRequest;
        return this;
    }
    public String contentType;
    public CreateAccessPointResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object fileSystemNotFound;
    public CreateAccessPointResponse withFileSystemNotFound(Object fileSystemNotFound) {
        this.fileSystemNotFound = fileSystemNotFound;
        return this;
    }
    public Object incorrectFileSystemLifeCycleState;
    public CreateAccessPointResponse withIncorrectFileSystemLifeCycleState(Object incorrectFileSystemLifeCycleState) {
        this.incorrectFileSystemLifeCycleState = incorrectFileSystemLifeCycleState;
        return this;
    }
    public Object internalServerError;
    public CreateAccessPointResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Long statusCode;
    public CreateAccessPointResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}