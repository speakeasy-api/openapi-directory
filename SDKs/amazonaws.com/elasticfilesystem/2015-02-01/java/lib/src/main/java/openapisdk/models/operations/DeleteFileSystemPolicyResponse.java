package openapisdk.models.operations;



public class DeleteFileSystemPolicyResponse {
    public String contentType;
    public DeleteFileSystemPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object fileSystemNotFound;
    public DeleteFileSystemPolicyResponse withFileSystemNotFound(Object fileSystemNotFound) {
        this.fileSystemNotFound = fileSystemNotFound;
        return this;
    }
    public Object incorrectFileSystemLifeCycleState;
    public DeleteFileSystemPolicyResponse withIncorrectFileSystemLifeCycleState(Object incorrectFileSystemLifeCycleState) {
        this.incorrectFileSystemLifeCycleState = incorrectFileSystemLifeCycleState;
        return this;
    }
    public Object internalServerError;
    public DeleteFileSystemPolicyResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Long statusCode;
    public DeleteFileSystemPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}