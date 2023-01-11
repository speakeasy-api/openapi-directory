package openapisdk.models.operations;



public class GetMergeCommitResponse {
    public Object commitDoesNotExistException;
    public GetMergeCommitResponse withCommitDoesNotExistException(Object commitDoesNotExistException) {
        this.commitDoesNotExistException = commitDoesNotExistException;
        return this;
    }
    public Object commitRequiredException;
    public GetMergeCommitResponse withCommitRequiredException(Object commitRequiredException) {
        this.commitRequiredException = commitRequiredException;
        return this;
    }
    public String contentType;
    public GetMergeCommitResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object encryptionIntegrityChecksFailedException;
    public GetMergeCommitResponse withEncryptionIntegrityChecksFailedException(Object encryptionIntegrityChecksFailedException) {
        this.encryptionIntegrityChecksFailedException = encryptionIntegrityChecksFailedException;
        return this;
    }
    public Object encryptionKeyAccessDeniedException;
    public GetMergeCommitResponse withEncryptionKeyAccessDeniedException(Object encryptionKeyAccessDeniedException) {
        this.encryptionKeyAccessDeniedException = encryptionKeyAccessDeniedException;
        return this;
    }
    public Object encryptionKeyDisabledException;
    public GetMergeCommitResponse withEncryptionKeyDisabledException(Object encryptionKeyDisabledException) {
        this.encryptionKeyDisabledException = encryptionKeyDisabledException;
        return this;
    }
    public Object encryptionKeyNotFoundException;
    public GetMergeCommitResponse withEncryptionKeyNotFoundException(Object encryptionKeyNotFoundException) {
        this.encryptionKeyNotFoundException = encryptionKeyNotFoundException;
        return this;
    }
    public Object encryptionKeyUnavailableException;
    public GetMergeCommitResponse withEncryptionKeyUnavailableException(Object encryptionKeyUnavailableException) {
        this.encryptionKeyUnavailableException = encryptionKeyUnavailableException;
        return this;
    }
    public openapisdk.models.shared.GetMergeCommitOutput getMergeCommitOutput;
    public GetMergeCommitResponse withGetMergeCommitOutput(openapisdk.models.shared.GetMergeCommitOutput getMergeCommitOutput) {
        this.getMergeCommitOutput = getMergeCommitOutput;
        return this;
    }
    public Object invalidCommitException;
    public GetMergeCommitResponse withInvalidCommitException(Object invalidCommitException) {
        this.invalidCommitException = invalidCommitException;
        return this;
    }
    public Object invalidConflictDetailLevelException;
    public GetMergeCommitResponse withInvalidConflictDetailLevelException(Object invalidConflictDetailLevelException) {
        this.invalidConflictDetailLevelException = invalidConflictDetailLevelException;
        return this;
    }
    public Object invalidConflictResolutionStrategyException;
    public GetMergeCommitResponse withInvalidConflictResolutionStrategyException(Object invalidConflictResolutionStrategyException) {
        this.invalidConflictResolutionStrategyException = invalidConflictResolutionStrategyException;
        return this;
    }
    public Object invalidRepositoryNameException;
    public GetMergeCommitResponse withInvalidRepositoryNameException(Object invalidRepositoryNameException) {
        this.invalidRepositoryNameException = invalidRepositoryNameException;
        return this;
    }
    public Object repositoryDoesNotExistException;
    public GetMergeCommitResponse withRepositoryDoesNotExistException(Object repositoryDoesNotExistException) {
        this.repositoryDoesNotExistException = repositoryDoesNotExistException;
        return this;
    }
    public Object repositoryNameRequiredException;
    public GetMergeCommitResponse withRepositoryNameRequiredException(Object repositoryNameRequiredException) {
        this.repositoryNameRequiredException = repositoryNameRequiredException;
        return this;
    }
    public Long statusCode;
    public GetMergeCommitResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}