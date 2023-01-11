package openapisdk.models.operations;



public class PutBackupPolicyResponse {
    public openapisdk.models.shared.BackupPolicyDescription backupPolicyDescription;
    public PutBackupPolicyResponse withBackupPolicyDescription(openapisdk.models.shared.BackupPolicyDescription backupPolicyDescription) {
        this.backupPolicyDescription = backupPolicyDescription;
        return this;
    }
    public Object badRequest;
    public PutBackupPolicyResponse withBadRequest(Object badRequest) {
        this.badRequest = badRequest;
        return this;
    }
    public String contentType;
    public PutBackupPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object fileSystemNotFound;
    public PutBackupPolicyResponse withFileSystemNotFound(Object fileSystemNotFound) {
        this.fileSystemNotFound = fileSystemNotFound;
        return this;
    }
    public Object incorrectFileSystemLifeCycleState;
    public PutBackupPolicyResponse withIncorrectFileSystemLifeCycleState(Object incorrectFileSystemLifeCycleState) {
        this.incorrectFileSystemLifeCycleState = incorrectFileSystemLifeCycleState;
        return this;
    }
    public Object internalServerError;
    public PutBackupPolicyResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Long statusCode;
    public PutBackupPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public PutBackupPolicyResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}