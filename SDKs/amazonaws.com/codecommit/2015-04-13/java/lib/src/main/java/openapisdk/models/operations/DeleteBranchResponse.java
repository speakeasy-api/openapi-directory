package openapisdk.models.operations;



public class DeleteBranchResponse {
    public Object branchNameRequiredException;
    public DeleteBranchResponse withBranchNameRequiredException(Object branchNameRequiredException) {
        this.branchNameRequiredException = branchNameRequiredException;
        return this;
    }
    public String contentType;
    public DeleteBranchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object defaultBranchCannotBeDeletedException;
    public DeleteBranchResponse withDefaultBranchCannotBeDeletedException(Object defaultBranchCannotBeDeletedException) {
        this.defaultBranchCannotBeDeletedException = defaultBranchCannotBeDeletedException;
        return this;
    }
    public openapisdk.models.shared.DeleteBranchOutput deleteBranchOutput;
    public DeleteBranchResponse withDeleteBranchOutput(openapisdk.models.shared.DeleteBranchOutput deleteBranchOutput) {
        this.deleteBranchOutput = deleteBranchOutput;
        return this;
    }
    public Object encryptionIntegrityChecksFailedException;
    public DeleteBranchResponse withEncryptionIntegrityChecksFailedException(Object encryptionIntegrityChecksFailedException) {
        this.encryptionIntegrityChecksFailedException = encryptionIntegrityChecksFailedException;
        return this;
    }
    public Object encryptionKeyAccessDeniedException;
    public DeleteBranchResponse withEncryptionKeyAccessDeniedException(Object encryptionKeyAccessDeniedException) {
        this.encryptionKeyAccessDeniedException = encryptionKeyAccessDeniedException;
        return this;
    }
    public Object encryptionKeyDisabledException;
    public DeleteBranchResponse withEncryptionKeyDisabledException(Object encryptionKeyDisabledException) {
        this.encryptionKeyDisabledException = encryptionKeyDisabledException;
        return this;
    }
    public Object encryptionKeyNotFoundException;
    public DeleteBranchResponse withEncryptionKeyNotFoundException(Object encryptionKeyNotFoundException) {
        this.encryptionKeyNotFoundException = encryptionKeyNotFoundException;
        return this;
    }
    public Object encryptionKeyUnavailableException;
    public DeleteBranchResponse withEncryptionKeyUnavailableException(Object encryptionKeyUnavailableException) {
        this.encryptionKeyUnavailableException = encryptionKeyUnavailableException;
        return this;
    }
    public Object invalidBranchNameException;
    public DeleteBranchResponse withInvalidBranchNameException(Object invalidBranchNameException) {
        this.invalidBranchNameException = invalidBranchNameException;
        return this;
    }
    public Object invalidRepositoryNameException;
    public DeleteBranchResponse withInvalidRepositoryNameException(Object invalidRepositoryNameException) {
        this.invalidRepositoryNameException = invalidRepositoryNameException;
        return this;
    }
    public Object repositoryDoesNotExistException;
    public DeleteBranchResponse withRepositoryDoesNotExistException(Object repositoryDoesNotExistException) {
        this.repositoryDoesNotExistException = repositoryDoesNotExistException;
        return this;
    }
    public Object repositoryNameRequiredException;
    public DeleteBranchResponse withRepositoryNameRequiredException(Object repositoryNameRequiredException) {
        this.repositoryNameRequiredException = repositoryNameRequiredException;
        return this;
    }
    public Long statusCode;
    public DeleteBranchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}