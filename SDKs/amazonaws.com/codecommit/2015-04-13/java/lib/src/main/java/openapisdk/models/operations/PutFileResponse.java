package openapisdk.models.operations;



public class PutFileResponse {
    public Object branchDoesNotExistException;
    public PutFileResponse withBranchDoesNotExistException(Object branchDoesNotExistException) {
        this.branchDoesNotExistException = branchDoesNotExistException;
        return this;
    }
    public Object branchNameIsTagNameException;
    public PutFileResponse withBranchNameIsTagNameException(Object branchNameIsTagNameException) {
        this.branchNameIsTagNameException = branchNameIsTagNameException;
        return this;
    }
    public Object branchNameRequiredException;
    public PutFileResponse withBranchNameRequiredException(Object branchNameRequiredException) {
        this.branchNameRequiredException = branchNameRequiredException;
        return this;
    }
    public Object commitMessageLengthExceededException;
    public PutFileResponse withCommitMessageLengthExceededException(Object commitMessageLengthExceededException) {
        this.commitMessageLengthExceededException = commitMessageLengthExceededException;
        return this;
    }
    public String contentType;
    public PutFileResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object directoryNameConflictsWithFileNameException;
    public PutFileResponse withDirectoryNameConflictsWithFileNameException(Object directoryNameConflictsWithFileNameException) {
        this.directoryNameConflictsWithFileNameException = directoryNameConflictsWithFileNameException;
        return this;
    }
    public Object encryptionIntegrityChecksFailedException;
    public PutFileResponse withEncryptionIntegrityChecksFailedException(Object encryptionIntegrityChecksFailedException) {
        this.encryptionIntegrityChecksFailedException = encryptionIntegrityChecksFailedException;
        return this;
    }
    public Object encryptionKeyAccessDeniedException;
    public PutFileResponse withEncryptionKeyAccessDeniedException(Object encryptionKeyAccessDeniedException) {
        this.encryptionKeyAccessDeniedException = encryptionKeyAccessDeniedException;
        return this;
    }
    public Object encryptionKeyDisabledException;
    public PutFileResponse withEncryptionKeyDisabledException(Object encryptionKeyDisabledException) {
        this.encryptionKeyDisabledException = encryptionKeyDisabledException;
        return this;
    }
    public Object encryptionKeyNotFoundException;
    public PutFileResponse withEncryptionKeyNotFoundException(Object encryptionKeyNotFoundException) {
        this.encryptionKeyNotFoundException = encryptionKeyNotFoundException;
        return this;
    }
    public Object encryptionKeyUnavailableException;
    public PutFileResponse withEncryptionKeyUnavailableException(Object encryptionKeyUnavailableException) {
        this.encryptionKeyUnavailableException = encryptionKeyUnavailableException;
        return this;
    }
    public Object fileContentRequiredException;
    public PutFileResponse withFileContentRequiredException(Object fileContentRequiredException) {
        this.fileContentRequiredException = fileContentRequiredException;
        return this;
    }
    public Object fileContentSizeLimitExceededException;
    public PutFileResponse withFileContentSizeLimitExceededException(Object fileContentSizeLimitExceededException) {
        this.fileContentSizeLimitExceededException = fileContentSizeLimitExceededException;
        return this;
    }
    public Object fileNameConflictsWithDirectoryNameException;
    public PutFileResponse withFileNameConflictsWithDirectoryNameException(Object fileNameConflictsWithDirectoryNameException) {
        this.fileNameConflictsWithDirectoryNameException = fileNameConflictsWithDirectoryNameException;
        return this;
    }
    public Object filePathConflictsWithSubmodulePathException;
    public PutFileResponse withFilePathConflictsWithSubmodulePathException(Object filePathConflictsWithSubmodulePathException) {
        this.filePathConflictsWithSubmodulePathException = filePathConflictsWithSubmodulePathException;
        return this;
    }
    public Object folderContentSizeLimitExceededException;
    public PutFileResponse withFolderContentSizeLimitExceededException(Object folderContentSizeLimitExceededException) {
        this.folderContentSizeLimitExceededException = folderContentSizeLimitExceededException;
        return this;
    }
    public Object invalidBranchNameException;
    public PutFileResponse withInvalidBranchNameException(Object invalidBranchNameException) {
        this.invalidBranchNameException = invalidBranchNameException;
        return this;
    }
    public Object invalidDeletionParameterException;
    public PutFileResponse withInvalidDeletionParameterException(Object invalidDeletionParameterException) {
        this.invalidDeletionParameterException = invalidDeletionParameterException;
        return this;
    }
    public Object invalidEmailException;
    public PutFileResponse withInvalidEmailException(Object invalidEmailException) {
        this.invalidEmailException = invalidEmailException;
        return this;
    }
    public Object invalidFileModeException;
    public PutFileResponse withInvalidFileModeException(Object invalidFileModeException) {
        this.invalidFileModeException = invalidFileModeException;
        return this;
    }
    public Object invalidParentCommitIdException;
    public PutFileResponse withInvalidParentCommitIdException(Object invalidParentCommitIdException) {
        this.invalidParentCommitIdException = invalidParentCommitIdException;
        return this;
    }
    public Object invalidPathException;
    public PutFileResponse withInvalidPathException(Object invalidPathException) {
        this.invalidPathException = invalidPathException;
        return this;
    }
    public Object invalidRepositoryNameException;
    public PutFileResponse withInvalidRepositoryNameException(Object invalidRepositoryNameException) {
        this.invalidRepositoryNameException = invalidRepositoryNameException;
        return this;
    }
    public Object nameLengthExceededException;
    public PutFileResponse withNameLengthExceededException(Object nameLengthExceededException) {
        this.nameLengthExceededException = nameLengthExceededException;
        return this;
    }
    public Object parentCommitDoesNotExistException;
    public PutFileResponse withParentCommitDoesNotExistException(Object parentCommitDoesNotExistException) {
        this.parentCommitDoesNotExistException = parentCommitDoesNotExistException;
        return this;
    }
    public Object parentCommitIdOutdatedException;
    public PutFileResponse withParentCommitIdOutdatedException(Object parentCommitIdOutdatedException) {
        this.parentCommitIdOutdatedException = parentCommitIdOutdatedException;
        return this;
    }
    public Object parentCommitIdRequiredException;
    public PutFileResponse withParentCommitIdRequiredException(Object parentCommitIdRequiredException) {
        this.parentCommitIdRequiredException = parentCommitIdRequiredException;
        return this;
    }
    public Object pathRequiredException;
    public PutFileResponse withPathRequiredException(Object pathRequiredException) {
        this.pathRequiredException = pathRequiredException;
        return this;
    }
    public openapisdk.models.shared.PutFileOutput putFileOutput;
    public PutFileResponse withPutFileOutput(openapisdk.models.shared.PutFileOutput putFileOutput) {
        this.putFileOutput = putFileOutput;
        return this;
    }
    public Object repositoryDoesNotExistException;
    public PutFileResponse withRepositoryDoesNotExistException(Object repositoryDoesNotExistException) {
        this.repositoryDoesNotExistException = repositoryDoesNotExistException;
        return this;
    }
    public Object repositoryNameRequiredException;
    public PutFileResponse withRepositoryNameRequiredException(Object repositoryNameRequiredException) {
        this.repositoryNameRequiredException = repositoryNameRequiredException;
        return this;
    }
    public Object sameFileContentException;
    public PutFileResponse withSameFileContentException(Object sameFileContentException) {
        this.sameFileContentException = sameFileContentException;
        return this;
    }
    public Long statusCode;
    public PutFileResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}