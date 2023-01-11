package openapisdk.models.operations;



public class GetMergeOptionsResponse {
    public Object commitDoesNotExistException;
    public GetMergeOptionsResponse withCommitDoesNotExistException(Object commitDoesNotExistException) {
        this.commitDoesNotExistException = commitDoesNotExistException;
        return this;
    }
    public Object commitRequiredException;
    public GetMergeOptionsResponse withCommitRequiredException(Object commitRequiredException) {
        this.commitRequiredException = commitRequiredException;
        return this;
    }
    public String contentType;
    public GetMergeOptionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object encryptionIntegrityChecksFailedException;
    public GetMergeOptionsResponse withEncryptionIntegrityChecksFailedException(Object encryptionIntegrityChecksFailedException) {
        this.encryptionIntegrityChecksFailedException = encryptionIntegrityChecksFailedException;
        return this;
    }
    public Object encryptionKeyAccessDeniedException;
    public GetMergeOptionsResponse withEncryptionKeyAccessDeniedException(Object encryptionKeyAccessDeniedException) {
        this.encryptionKeyAccessDeniedException = encryptionKeyAccessDeniedException;
        return this;
    }
    public Object encryptionKeyDisabledException;
    public GetMergeOptionsResponse withEncryptionKeyDisabledException(Object encryptionKeyDisabledException) {
        this.encryptionKeyDisabledException = encryptionKeyDisabledException;
        return this;
    }
    public Object encryptionKeyNotFoundException;
    public GetMergeOptionsResponse withEncryptionKeyNotFoundException(Object encryptionKeyNotFoundException) {
        this.encryptionKeyNotFoundException = encryptionKeyNotFoundException;
        return this;
    }
    public Object encryptionKeyUnavailableException;
    public GetMergeOptionsResponse withEncryptionKeyUnavailableException(Object encryptionKeyUnavailableException) {
        this.encryptionKeyUnavailableException = encryptionKeyUnavailableException;
        return this;
    }
    public openapisdk.models.shared.GetMergeOptionsOutput getMergeOptionsOutput;
    public GetMergeOptionsResponse withGetMergeOptionsOutput(openapisdk.models.shared.GetMergeOptionsOutput getMergeOptionsOutput) {
        this.getMergeOptionsOutput = getMergeOptionsOutput;
        return this;
    }
    public Object invalidCommitException;
    public GetMergeOptionsResponse withInvalidCommitException(Object invalidCommitException) {
        this.invalidCommitException = invalidCommitException;
        return this;
    }
    public Object invalidConflictDetailLevelException;
    public GetMergeOptionsResponse withInvalidConflictDetailLevelException(Object invalidConflictDetailLevelException) {
        this.invalidConflictDetailLevelException = invalidConflictDetailLevelException;
        return this;
    }
    public Object invalidConflictResolutionStrategyException;
    public GetMergeOptionsResponse withInvalidConflictResolutionStrategyException(Object invalidConflictResolutionStrategyException) {
        this.invalidConflictResolutionStrategyException = invalidConflictResolutionStrategyException;
        return this;
    }
    public Object invalidRepositoryNameException;
    public GetMergeOptionsResponse withInvalidRepositoryNameException(Object invalidRepositoryNameException) {
        this.invalidRepositoryNameException = invalidRepositoryNameException;
        return this;
    }
    public Object maximumFileContentToLoadExceededException;
    public GetMergeOptionsResponse withMaximumFileContentToLoadExceededException(Object maximumFileContentToLoadExceededException) {
        this.maximumFileContentToLoadExceededException = maximumFileContentToLoadExceededException;
        return this;
    }
    public Object maximumItemsToCompareExceededException;
    public GetMergeOptionsResponse withMaximumItemsToCompareExceededException(Object maximumItemsToCompareExceededException) {
        this.maximumItemsToCompareExceededException = maximumItemsToCompareExceededException;
        return this;
    }
    public Object repositoryDoesNotExistException;
    public GetMergeOptionsResponse withRepositoryDoesNotExistException(Object repositoryDoesNotExistException) {
        this.repositoryDoesNotExistException = repositoryDoesNotExistException;
        return this;
    }
    public Object repositoryNameRequiredException;
    public GetMergeOptionsResponse withRepositoryNameRequiredException(Object repositoryNameRequiredException) {
        this.repositoryNameRequiredException = repositoryNameRequiredException;
        return this;
    }
    public Long statusCode;
    public GetMergeOptionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tipsDivergenceExceededException;
    public GetMergeOptionsResponse withTipsDivergenceExceededException(Object tipsDivergenceExceededException) {
        this.tipsDivergenceExceededException = tipsDivergenceExceededException;
        return this;
    }
}