package openapisdk.models.operations;



public class DeleteFileResponse {
    public Object branchDoesNotExistException;
    public DeleteFileResponse withBranchDoesNotExistException(Object branchDoesNotExistException) {
        this.branchDoesNotExistException = branchDoesNotExistException;
        return this;
    }
    public Object branchNameIsTagNameException;
    public DeleteFileResponse withBranchNameIsTagNameException(Object branchNameIsTagNameException) {
        this.branchNameIsTagNameException = branchNameIsTagNameException;
        return this;
    }
    public Object branchNameRequiredException;
    public DeleteFileResponse withBranchNameRequiredException(Object branchNameRequiredException) {
        this.branchNameRequiredException = branchNameRequiredException;
        return this;
    }
    public Object commitMessageLengthExceededException;
    public DeleteFileResponse withCommitMessageLengthExceededException(Object commitMessageLengthExceededException) {
        this.commitMessageLengthExceededException = commitMessageLengthExceededException;
        return this;
    }
    public String contentType;
    public DeleteFileResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteFileOutput deleteFileOutput;
    public DeleteFileResponse withDeleteFileOutput(openapisdk.models.shared.DeleteFileOutput deleteFileOutput) {
        this.deleteFileOutput = deleteFileOutput;
        return this;
    }
    public Object encryptionIntegrityChecksFailedException;
    public DeleteFileResponse withEncryptionIntegrityChecksFailedException(Object encryptionIntegrityChecksFailedException) {
        this.encryptionIntegrityChecksFailedException = encryptionIntegrityChecksFailedException;
        return this;
    }
    public Object encryptionKeyAccessDeniedException;
    public DeleteFileResponse withEncryptionKeyAccessDeniedException(Object encryptionKeyAccessDeniedException) {
        this.encryptionKeyAccessDeniedException = encryptionKeyAccessDeniedException;
        return this;
    }
    public Object encryptionKeyDisabledException;
    public DeleteFileResponse withEncryptionKeyDisabledException(Object encryptionKeyDisabledException) {
        this.encryptionKeyDisabledException = encryptionKeyDisabledException;
        return this;
    }
    public Object encryptionKeyNotFoundException;
    public DeleteFileResponse withEncryptionKeyNotFoundException(Object encryptionKeyNotFoundException) {
        this.encryptionKeyNotFoundException = encryptionKeyNotFoundException;
        return this;
    }
    public Object encryptionKeyUnavailableException;
    public DeleteFileResponse withEncryptionKeyUnavailableException(Object encryptionKeyUnavailableException) {
        this.encryptionKeyUnavailableException = encryptionKeyUnavailableException;
        return this;
    }
    public Object fileDoesNotExistException;
    public DeleteFileResponse withFileDoesNotExistException(Object fileDoesNotExistException) {
        this.fileDoesNotExistException = fileDoesNotExistException;
        return this;
    }
    public Object invalidBranchNameException;
    public DeleteFileResponse withInvalidBranchNameException(Object invalidBranchNameException) {
        this.invalidBranchNameException = invalidBranchNameException;
        return this;
    }
    public Object invalidEmailException;
    public DeleteFileResponse withInvalidEmailException(Object invalidEmailException) {
        this.invalidEmailException = invalidEmailException;
        return this;
    }
    public Object invalidParentCommitIdException;
    public DeleteFileResponse withInvalidParentCommitIdException(Object invalidParentCommitIdException) {
        this.invalidParentCommitIdException = invalidParentCommitIdException;
        return this;
    }
    public Object invalidPathException;
    public DeleteFileResponse withInvalidPathException(Object invalidPathException) {
        this.invalidPathException = invalidPathException;
        return this;
    }
    public Object invalidRepositoryNameException;
    public DeleteFileResponse withInvalidRepositoryNameException(Object invalidRepositoryNameException) {
        this.invalidRepositoryNameException = invalidRepositoryNameException;
        return this;
    }
    public Object nameLengthExceededException;
    public DeleteFileResponse withNameLengthExceededException(Object nameLengthExceededException) {
        this.nameLengthExceededException = nameLengthExceededException;
        return this;
    }
    public Object parentCommitDoesNotExistException;
    public DeleteFileResponse withParentCommitDoesNotExistException(Object parentCommitDoesNotExistException) {
        this.parentCommitDoesNotExistException = parentCommitDoesNotExistException;
        return this;
    }
    public Object parentCommitIdOutdatedException;
    public DeleteFileResponse withParentCommitIdOutdatedException(Object parentCommitIdOutdatedException) {
        this.parentCommitIdOutdatedException = parentCommitIdOutdatedException;
        return this;
    }
    public Object parentCommitIdRequiredException;
    public DeleteFileResponse withParentCommitIdRequiredException(Object parentCommitIdRequiredException) {
        this.parentCommitIdRequiredException = parentCommitIdRequiredException;
        return this;
    }
    public Object pathRequiredException;
    public DeleteFileResponse withPathRequiredException(Object pathRequiredException) {
        this.pathRequiredException = pathRequiredException;
        return this;
    }
    public Object repositoryDoesNotExistException;
    public DeleteFileResponse withRepositoryDoesNotExistException(Object repositoryDoesNotExistException) {
        this.repositoryDoesNotExistException = repositoryDoesNotExistException;
        return this;
    }
    public Object repositoryNameRequiredException;
    public DeleteFileResponse withRepositoryNameRequiredException(Object repositoryNameRequiredException) {
        this.repositoryNameRequiredException = repositoryNameRequiredException;
        return this;
    }
    public Long statusCode;
    public DeleteFileResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}