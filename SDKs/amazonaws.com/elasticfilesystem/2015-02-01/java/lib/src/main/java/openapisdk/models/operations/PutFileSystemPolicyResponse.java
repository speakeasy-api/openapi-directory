package openapisdk.models.operations;



public class PutFileSystemPolicyResponse {
    public String contentType;
    public PutFileSystemPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object fileSystemNotFound;
    public PutFileSystemPolicyResponse withFileSystemNotFound(Object fileSystemNotFound) {
        this.fileSystemNotFound = fileSystemNotFound;
        return this;
    }
    public openapisdk.models.shared.FileSystemPolicyDescription fileSystemPolicyDescription;
    public PutFileSystemPolicyResponse withFileSystemPolicyDescription(openapisdk.models.shared.FileSystemPolicyDescription fileSystemPolicyDescription) {
        this.fileSystemPolicyDescription = fileSystemPolicyDescription;
        return this;
    }
    public Object incorrectFileSystemLifeCycleState;
    public PutFileSystemPolicyResponse withIncorrectFileSystemLifeCycleState(Object incorrectFileSystemLifeCycleState) {
        this.incorrectFileSystemLifeCycleState = incorrectFileSystemLifeCycleState;
        return this;
    }
    public Object internalServerError;
    public PutFileSystemPolicyResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Object invalidPolicyException;
    public PutFileSystemPolicyResponse withInvalidPolicyException(Object invalidPolicyException) {
        this.invalidPolicyException = invalidPolicyException;
        return this;
    }
    public Long statusCode;
    public PutFileSystemPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}