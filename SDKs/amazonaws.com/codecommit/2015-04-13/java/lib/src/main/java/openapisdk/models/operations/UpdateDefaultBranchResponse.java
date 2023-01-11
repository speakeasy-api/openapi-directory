package openapisdk.models.operations;



public class UpdateDefaultBranchResponse {
    public Object branchDoesNotExistException;
    public UpdateDefaultBranchResponse withBranchDoesNotExistException(Object branchDoesNotExistException) {
        this.branchDoesNotExistException = branchDoesNotExistException;
        return this;
    }
    public Object branchNameRequiredException;
    public UpdateDefaultBranchResponse withBranchNameRequiredException(Object branchNameRequiredException) {
        this.branchNameRequiredException = branchNameRequiredException;
        return this;
    }
    public String contentType;
    public UpdateDefaultBranchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object encryptionIntegrityChecksFailedException;
    public UpdateDefaultBranchResponse withEncryptionIntegrityChecksFailedException(Object encryptionIntegrityChecksFailedException) {
        this.encryptionIntegrityChecksFailedException = encryptionIntegrityChecksFailedException;
        return this;
    }
    public Object encryptionKeyAccessDeniedException;
    public UpdateDefaultBranchResponse withEncryptionKeyAccessDeniedException(Object encryptionKeyAccessDeniedException) {
        this.encryptionKeyAccessDeniedException = encryptionKeyAccessDeniedException;
        return this;
    }
    public Object encryptionKeyDisabledException;
    public UpdateDefaultBranchResponse withEncryptionKeyDisabledException(Object encryptionKeyDisabledException) {
        this.encryptionKeyDisabledException = encryptionKeyDisabledException;
        return this;
    }
    public Object encryptionKeyNotFoundException;
    public UpdateDefaultBranchResponse withEncryptionKeyNotFoundException(Object encryptionKeyNotFoundException) {
        this.encryptionKeyNotFoundException = encryptionKeyNotFoundException;
        return this;
    }
    public Object encryptionKeyUnavailableException;
    public UpdateDefaultBranchResponse withEncryptionKeyUnavailableException(Object encryptionKeyUnavailableException) {
        this.encryptionKeyUnavailableException = encryptionKeyUnavailableException;
        return this;
    }
    public Object invalidBranchNameException;
    public UpdateDefaultBranchResponse withInvalidBranchNameException(Object invalidBranchNameException) {
        this.invalidBranchNameException = invalidBranchNameException;
        return this;
    }
    public Object invalidRepositoryNameException;
    public UpdateDefaultBranchResponse withInvalidRepositoryNameException(Object invalidRepositoryNameException) {
        this.invalidRepositoryNameException = invalidRepositoryNameException;
        return this;
    }
    public Object repositoryDoesNotExistException;
    public UpdateDefaultBranchResponse withRepositoryDoesNotExistException(Object repositoryDoesNotExistException) {
        this.repositoryDoesNotExistException = repositoryDoesNotExistException;
        return this;
    }
    public Object repositoryNameRequiredException;
    public UpdateDefaultBranchResponse withRepositoryNameRequiredException(Object repositoryNameRequiredException) {
        this.repositoryNameRequiredException = repositoryNameRequiredException;
        return this;
    }
    public Long statusCode;
    public UpdateDefaultBranchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}