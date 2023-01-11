package openapisdk.models.operations;



public class CreateCommitResponse {
    public Object branchDoesNotExistException;
    public CreateCommitResponse withBranchDoesNotExistException(Object branchDoesNotExistException) {
        this.branchDoesNotExistException = branchDoesNotExistException;
        return this;
    }
    public Object branchNameIsTagNameException;
    public CreateCommitResponse withBranchNameIsTagNameException(Object branchNameIsTagNameException) {
        this.branchNameIsTagNameException = branchNameIsTagNameException;
        return this;
    }
    public Object branchNameRequiredException;
    public CreateCommitResponse withBranchNameRequiredException(Object branchNameRequiredException) {
        this.branchNameRequiredException = branchNameRequiredException;
        return this;
    }
    public Object commitMessageLengthExceededException;
    public CreateCommitResponse withCommitMessageLengthExceededException(Object commitMessageLengthExceededException) {
        this.commitMessageLengthExceededException = commitMessageLengthExceededException;
        return this;
    }
    public String contentType;
    public CreateCommitResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateCommitOutput createCommitOutput;
    public CreateCommitResponse withCreateCommitOutput(openapisdk.models.shared.CreateCommitOutput createCommitOutput) {
        this.createCommitOutput = createCommitOutput;
        return this;
    }
    public Object directoryNameConflictsWithFileNameException;
    public CreateCommitResponse withDirectoryNameConflictsWithFileNameException(Object directoryNameConflictsWithFileNameException) {
        this.directoryNameConflictsWithFileNameException = directoryNameConflictsWithFileNameException;
        return this;
    }
    public Object encryptionIntegrityChecksFailedException;
    public CreateCommitResponse withEncryptionIntegrityChecksFailedException(Object encryptionIntegrityChecksFailedException) {
        this.encryptionIntegrityChecksFailedException = encryptionIntegrityChecksFailedException;
        return this;
    }
    public Object encryptionKeyAccessDeniedException;
    public CreateCommitResponse withEncryptionKeyAccessDeniedException(Object encryptionKeyAccessDeniedException) {
        this.encryptionKeyAccessDeniedException = encryptionKeyAccessDeniedException;
        return this;
    }
    public Object encryptionKeyDisabledException;
    public CreateCommitResponse withEncryptionKeyDisabledException(Object encryptionKeyDisabledException) {
        this.encryptionKeyDisabledException = encryptionKeyDisabledException;
        return this;
    }
    public Object encryptionKeyNotFoundException;
    public CreateCommitResponse withEncryptionKeyNotFoundException(Object encryptionKeyNotFoundException) {
        this.encryptionKeyNotFoundException = encryptionKeyNotFoundException;
        return this;
    }
    public Object encryptionKeyUnavailableException;
    public CreateCommitResponse withEncryptionKeyUnavailableException(Object encryptionKeyUnavailableException) {
        this.encryptionKeyUnavailableException = encryptionKeyUnavailableException;
        return this;
    }
    public Object fileContentAndSourceFileSpecifiedException;
    public CreateCommitResponse withFileContentAndSourceFileSpecifiedException(Object fileContentAndSourceFileSpecifiedException) {
        this.fileContentAndSourceFileSpecifiedException = fileContentAndSourceFileSpecifiedException;
        return this;
    }
    public Object fileContentSizeLimitExceededException;
    public CreateCommitResponse withFileContentSizeLimitExceededException(Object fileContentSizeLimitExceededException) {
        this.fileContentSizeLimitExceededException = fileContentSizeLimitExceededException;
        return this;
    }
    public Object fileDoesNotExistException;
    public CreateCommitResponse withFileDoesNotExistException(Object fileDoesNotExistException) {
        this.fileDoesNotExistException = fileDoesNotExistException;
        return this;
    }
    public Object fileEntryRequiredException;
    public CreateCommitResponse withFileEntryRequiredException(Object fileEntryRequiredException) {
        this.fileEntryRequiredException = fileEntryRequiredException;
        return this;
    }
    public Object fileModeRequiredException;
    public CreateCommitResponse withFileModeRequiredException(Object fileModeRequiredException) {
        this.fileModeRequiredException = fileModeRequiredException;
        return this;
    }
    public Object fileNameConflictsWithDirectoryNameException;
    public CreateCommitResponse withFileNameConflictsWithDirectoryNameException(Object fileNameConflictsWithDirectoryNameException) {
        this.fileNameConflictsWithDirectoryNameException = fileNameConflictsWithDirectoryNameException;
        return this;
    }
    public Object filePathConflictsWithSubmodulePathException;
    public CreateCommitResponse withFilePathConflictsWithSubmodulePathException(Object filePathConflictsWithSubmodulePathException) {
        this.filePathConflictsWithSubmodulePathException = filePathConflictsWithSubmodulePathException;
        return this;
    }
    public Object folderContentSizeLimitExceededException;
    public CreateCommitResponse withFolderContentSizeLimitExceededException(Object folderContentSizeLimitExceededException) {
        this.folderContentSizeLimitExceededException = folderContentSizeLimitExceededException;
        return this;
    }
    public Object invalidBranchNameException;
    public CreateCommitResponse withInvalidBranchNameException(Object invalidBranchNameException) {
        this.invalidBranchNameException = invalidBranchNameException;
        return this;
    }
    public Object invalidDeletionParameterException;
    public CreateCommitResponse withInvalidDeletionParameterException(Object invalidDeletionParameterException) {
        this.invalidDeletionParameterException = invalidDeletionParameterException;
        return this;
    }
    public Object invalidEmailException;
    public CreateCommitResponse withInvalidEmailException(Object invalidEmailException) {
        this.invalidEmailException = invalidEmailException;
        return this;
    }
    public Object invalidFileModeException;
    public CreateCommitResponse withInvalidFileModeException(Object invalidFileModeException) {
        this.invalidFileModeException = invalidFileModeException;
        return this;
    }
    public Object invalidParentCommitIdException;
    public CreateCommitResponse withInvalidParentCommitIdException(Object invalidParentCommitIdException) {
        this.invalidParentCommitIdException = invalidParentCommitIdException;
        return this;
    }
    public Object invalidPathException;
    public CreateCommitResponse withInvalidPathException(Object invalidPathException) {
        this.invalidPathException = invalidPathException;
        return this;
    }
    public Object invalidRepositoryNameException;
    public CreateCommitResponse withInvalidRepositoryNameException(Object invalidRepositoryNameException) {
        this.invalidRepositoryNameException = invalidRepositoryNameException;
        return this;
    }
    public Object maximumFileEntriesExceededException;
    public CreateCommitResponse withMaximumFileEntriesExceededException(Object maximumFileEntriesExceededException) {
        this.maximumFileEntriesExceededException = maximumFileEntriesExceededException;
        return this;
    }
    public Object nameLengthExceededException;
    public CreateCommitResponse withNameLengthExceededException(Object nameLengthExceededException) {
        this.nameLengthExceededException = nameLengthExceededException;
        return this;
    }
    public Object noChangeException;
    public CreateCommitResponse withNoChangeException(Object noChangeException) {
        this.noChangeException = noChangeException;
        return this;
    }
    public Object parentCommitDoesNotExistException;
    public CreateCommitResponse withParentCommitDoesNotExistException(Object parentCommitDoesNotExistException) {
        this.parentCommitDoesNotExistException = parentCommitDoesNotExistException;
        return this;
    }
    public Object parentCommitIdOutdatedException;
    public CreateCommitResponse withParentCommitIdOutdatedException(Object parentCommitIdOutdatedException) {
        this.parentCommitIdOutdatedException = parentCommitIdOutdatedException;
        return this;
    }
    public Object parentCommitIdRequiredException;
    public CreateCommitResponse withParentCommitIdRequiredException(Object parentCommitIdRequiredException) {
        this.parentCommitIdRequiredException = parentCommitIdRequiredException;
        return this;
    }
    public Object pathRequiredException;
    public CreateCommitResponse withPathRequiredException(Object pathRequiredException) {
        this.pathRequiredException = pathRequiredException;
        return this;
    }
    public Object putFileEntryConflictException;
    public CreateCommitResponse withPutFileEntryConflictException(Object putFileEntryConflictException) {
        this.putFileEntryConflictException = putFileEntryConflictException;
        return this;
    }
    public Object repositoryDoesNotExistException;
    public CreateCommitResponse withRepositoryDoesNotExistException(Object repositoryDoesNotExistException) {
        this.repositoryDoesNotExistException = repositoryDoesNotExistException;
        return this;
    }
    public Object repositoryNameRequiredException;
    public CreateCommitResponse withRepositoryNameRequiredException(Object repositoryNameRequiredException) {
        this.repositoryNameRequiredException = repositoryNameRequiredException;
        return this;
    }
    public Object restrictedSourceFileException;
    public CreateCommitResponse withRestrictedSourceFileException(Object restrictedSourceFileException) {
        this.restrictedSourceFileException = restrictedSourceFileException;
        return this;
    }
    public Object samePathRequestException;
    public CreateCommitResponse withSamePathRequestException(Object samePathRequestException) {
        this.samePathRequestException = samePathRequestException;
        return this;
    }
    public Object sourceFileOrContentRequiredException;
    public CreateCommitResponse withSourceFileOrContentRequiredException(Object sourceFileOrContentRequiredException) {
        this.sourceFileOrContentRequiredException = sourceFileOrContentRequiredException;
        return this;
    }
    public Long statusCode;
    public CreateCommitResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}