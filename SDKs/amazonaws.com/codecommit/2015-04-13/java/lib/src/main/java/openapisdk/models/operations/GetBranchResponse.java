package openapisdk.models.operations;



public class GetBranchResponse {
    public Object branchDoesNotExistException;
    public GetBranchResponse withBranchDoesNotExistException(Object branchDoesNotExistException) {
        this.branchDoesNotExistException = branchDoesNotExistException;
        return this;
    }
    public Object branchNameRequiredException;
    public GetBranchResponse withBranchNameRequiredException(Object branchNameRequiredException) {
        this.branchNameRequiredException = branchNameRequiredException;
        return this;
    }
    public String contentType;
    public GetBranchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object encryptionIntegrityChecksFailedException;
    public GetBranchResponse withEncryptionIntegrityChecksFailedException(Object encryptionIntegrityChecksFailedException) {
        this.encryptionIntegrityChecksFailedException = encryptionIntegrityChecksFailedException;
        return this;
    }
    public Object encryptionKeyAccessDeniedException;
    public GetBranchResponse withEncryptionKeyAccessDeniedException(Object encryptionKeyAccessDeniedException) {
        this.encryptionKeyAccessDeniedException = encryptionKeyAccessDeniedException;
        return this;
    }
    public Object encryptionKeyDisabledException;
    public GetBranchResponse withEncryptionKeyDisabledException(Object encryptionKeyDisabledException) {
        this.encryptionKeyDisabledException = encryptionKeyDisabledException;
        return this;
    }
    public Object encryptionKeyNotFoundException;
    public GetBranchResponse withEncryptionKeyNotFoundException(Object encryptionKeyNotFoundException) {
        this.encryptionKeyNotFoundException = encryptionKeyNotFoundException;
        return this;
    }
    public Object encryptionKeyUnavailableException;
    public GetBranchResponse withEncryptionKeyUnavailableException(Object encryptionKeyUnavailableException) {
        this.encryptionKeyUnavailableException = encryptionKeyUnavailableException;
        return this;
    }
    public openapisdk.models.shared.GetBranchOutput getBranchOutput;
    public GetBranchResponse withGetBranchOutput(openapisdk.models.shared.GetBranchOutput getBranchOutput) {
        this.getBranchOutput = getBranchOutput;
        return this;
    }
    public Object invalidBranchNameException;
    public GetBranchResponse withInvalidBranchNameException(Object invalidBranchNameException) {
        this.invalidBranchNameException = invalidBranchNameException;
        return this;
    }
    public Object invalidRepositoryNameException;
    public GetBranchResponse withInvalidRepositoryNameException(Object invalidRepositoryNameException) {
        this.invalidRepositoryNameException = invalidRepositoryNameException;
        return this;
    }
    public Object repositoryDoesNotExistException;
    public GetBranchResponse withRepositoryDoesNotExistException(Object repositoryDoesNotExistException) {
        this.repositoryDoesNotExistException = repositoryDoesNotExistException;
        return this;
    }
    public Object repositoryNameRequiredException;
    public GetBranchResponse withRepositoryNameRequiredException(Object repositoryNameRequiredException) {
        this.repositoryNameRequiredException = repositoryNameRequiredException;
        return this;
    }
    public Long statusCode;
    public GetBranchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}