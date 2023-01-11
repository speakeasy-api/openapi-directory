package openapisdk.models.operations;



public class CreateBranchResponse {
    public Object branchNameExistsException;
    public CreateBranchResponse withBranchNameExistsException(Object branchNameExistsException) {
        this.branchNameExistsException = branchNameExistsException;
        return this;
    }
    public Object branchNameRequiredException;
    public CreateBranchResponse withBranchNameRequiredException(Object branchNameRequiredException) {
        this.branchNameRequiredException = branchNameRequiredException;
        return this;
    }
    public Object commitDoesNotExistException;
    public CreateBranchResponse withCommitDoesNotExistException(Object commitDoesNotExistException) {
        this.commitDoesNotExistException = commitDoesNotExistException;
        return this;
    }
    public Object commitIdRequiredException;
    public CreateBranchResponse withCommitIdRequiredException(Object commitIdRequiredException) {
        this.commitIdRequiredException = commitIdRequiredException;
        return this;
    }
    public String contentType;
    public CreateBranchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object encryptionIntegrityChecksFailedException;
    public CreateBranchResponse withEncryptionIntegrityChecksFailedException(Object encryptionIntegrityChecksFailedException) {
        this.encryptionIntegrityChecksFailedException = encryptionIntegrityChecksFailedException;
        return this;
    }
    public Object encryptionKeyAccessDeniedException;
    public CreateBranchResponse withEncryptionKeyAccessDeniedException(Object encryptionKeyAccessDeniedException) {
        this.encryptionKeyAccessDeniedException = encryptionKeyAccessDeniedException;
        return this;
    }
    public Object encryptionKeyDisabledException;
    public CreateBranchResponse withEncryptionKeyDisabledException(Object encryptionKeyDisabledException) {
        this.encryptionKeyDisabledException = encryptionKeyDisabledException;
        return this;
    }
    public Object encryptionKeyNotFoundException;
    public CreateBranchResponse withEncryptionKeyNotFoundException(Object encryptionKeyNotFoundException) {
        this.encryptionKeyNotFoundException = encryptionKeyNotFoundException;
        return this;
    }
    public Object encryptionKeyUnavailableException;
    public CreateBranchResponse withEncryptionKeyUnavailableException(Object encryptionKeyUnavailableException) {
        this.encryptionKeyUnavailableException = encryptionKeyUnavailableException;
        return this;
    }
    public Object invalidBranchNameException;
    public CreateBranchResponse withInvalidBranchNameException(Object invalidBranchNameException) {
        this.invalidBranchNameException = invalidBranchNameException;
        return this;
    }
    public Object invalidCommitIdException;
    public CreateBranchResponse withInvalidCommitIdException(Object invalidCommitIdException) {
        this.invalidCommitIdException = invalidCommitIdException;
        return this;
    }
    public Object invalidRepositoryNameException;
    public CreateBranchResponse withInvalidRepositoryNameException(Object invalidRepositoryNameException) {
        this.invalidRepositoryNameException = invalidRepositoryNameException;
        return this;
    }
    public Object repositoryDoesNotExistException;
    public CreateBranchResponse withRepositoryDoesNotExistException(Object repositoryDoesNotExistException) {
        this.repositoryDoesNotExistException = repositoryDoesNotExistException;
        return this;
    }
    public Object repositoryNameRequiredException;
    public CreateBranchResponse withRepositoryNameRequiredException(Object repositoryNameRequiredException) {
        this.repositoryNameRequiredException = repositoryNameRequiredException;
        return this;
    }
    public Long statusCode;
    public CreateBranchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}