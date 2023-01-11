package openapisdk.models.operations;



public class DescribeBackupPolicyResponse {
    public openapisdk.models.shared.BackupPolicyDescription backupPolicyDescription;
    public DescribeBackupPolicyResponse withBackupPolicyDescription(openapisdk.models.shared.BackupPolicyDescription backupPolicyDescription) {
        this.backupPolicyDescription = backupPolicyDescription;
        return this;
    }
    public Object badRequest;
    public DescribeBackupPolicyResponse withBadRequest(Object badRequest) {
        this.badRequest = badRequest;
        return this;
    }
    public String contentType;
    public DescribeBackupPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object fileSystemNotFound;
    public DescribeBackupPolicyResponse withFileSystemNotFound(Object fileSystemNotFound) {
        this.fileSystemNotFound = fileSystemNotFound;
        return this;
    }
    public Object internalServerError;
    public DescribeBackupPolicyResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Object policyNotFound;
    public DescribeBackupPolicyResponse withPolicyNotFound(Object policyNotFound) {
        this.policyNotFound = policyNotFound;
        return this;
    }
    public Long statusCode;
    public DescribeBackupPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DescribeBackupPolicyResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}