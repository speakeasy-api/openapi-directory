package openapisdk.models.operations;



public class GetMergeConflictsResponse {
    public Object commitDoesNotExistException;
    public GetMergeConflictsResponse withCommitDoesNotExistException(Object commitDoesNotExistException) {
        this.commitDoesNotExistException = commitDoesNotExistException;
        return this;
    }
    public Object commitRequiredException;
    public GetMergeConflictsResponse withCommitRequiredException(Object commitRequiredException) {
        this.commitRequiredException = commitRequiredException;
        return this;
    }
    public String contentType;
    public GetMergeConflictsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object encryptionIntegrityChecksFailedException;
    public GetMergeConflictsResponse withEncryptionIntegrityChecksFailedException(Object encryptionIntegrityChecksFailedException) {
        this.encryptionIntegrityChecksFailedException = encryptionIntegrityChecksFailedException;
        return this;
    }
    public Object encryptionKeyAccessDeniedException;
    public GetMergeConflictsResponse withEncryptionKeyAccessDeniedException(Object encryptionKeyAccessDeniedException) {
        this.encryptionKeyAccessDeniedException = encryptionKeyAccessDeniedException;
        return this;
    }
    public Object encryptionKeyDisabledException;
    public GetMergeConflictsResponse withEncryptionKeyDisabledException(Object encryptionKeyDisabledException) {
        this.encryptionKeyDisabledException = encryptionKeyDisabledException;
        return this;
    }
    public Object encryptionKeyNotFoundException;
    public GetMergeConflictsResponse withEncryptionKeyNotFoundException(Object encryptionKeyNotFoundException) {
        this.encryptionKeyNotFoundException = encryptionKeyNotFoundException;
        return this;
    }
    public Object encryptionKeyUnavailableException;
    public GetMergeConflictsResponse withEncryptionKeyUnavailableException(Object encryptionKeyUnavailableException) {
        this.encryptionKeyUnavailableException = encryptionKeyUnavailableException;
        return this;
    }
    public openapisdk.models.shared.GetMergeConflictsOutput getMergeConflictsOutput;
    public GetMergeConflictsResponse withGetMergeConflictsOutput(openapisdk.models.shared.GetMergeConflictsOutput getMergeConflictsOutput) {
        this.getMergeConflictsOutput = getMergeConflictsOutput;
        return this;
    }
    public Object invalidCommitException;
    public GetMergeConflictsResponse withInvalidCommitException(Object invalidCommitException) {
        this.invalidCommitException = invalidCommitException;
        return this;
    }
    public Object invalidConflictDetailLevelException;
    public GetMergeConflictsResponse withInvalidConflictDetailLevelException(Object invalidConflictDetailLevelException) {
        this.invalidConflictDetailLevelException = invalidConflictDetailLevelException;
        return this;
    }
    public Object invalidConflictResolutionStrategyException;
    public GetMergeConflictsResponse withInvalidConflictResolutionStrategyException(Object invalidConflictResolutionStrategyException) {
        this.invalidConflictResolutionStrategyException = invalidConflictResolutionStrategyException;
        return this;
    }
    public Object invalidContinuationTokenException;
    public GetMergeConflictsResponse withInvalidContinuationTokenException(Object invalidContinuationTokenException) {
        this.invalidContinuationTokenException = invalidContinuationTokenException;
        return this;
    }
    public Object invalidDestinationCommitSpecifierException;
    public GetMergeConflictsResponse withInvalidDestinationCommitSpecifierException(Object invalidDestinationCommitSpecifierException) {
        this.invalidDestinationCommitSpecifierException = invalidDestinationCommitSpecifierException;
        return this;
    }
    public Object invalidMaxConflictFilesException;
    public GetMergeConflictsResponse withInvalidMaxConflictFilesException(Object invalidMaxConflictFilesException) {
        this.invalidMaxConflictFilesException = invalidMaxConflictFilesException;
        return this;
    }
    public Object invalidMergeOptionException;
    public GetMergeConflictsResponse withInvalidMergeOptionException(Object invalidMergeOptionException) {
        this.invalidMergeOptionException = invalidMergeOptionException;
        return this;
    }
    public Object invalidRepositoryNameException;
    public GetMergeConflictsResponse withInvalidRepositoryNameException(Object invalidRepositoryNameException) {
        this.invalidRepositoryNameException = invalidRepositoryNameException;
        return this;
    }
    public Object invalidSourceCommitSpecifierException;
    public GetMergeConflictsResponse withInvalidSourceCommitSpecifierException(Object invalidSourceCommitSpecifierException) {
        this.invalidSourceCommitSpecifierException = invalidSourceCommitSpecifierException;
        return this;
    }
    public Object maximumFileContentToLoadExceededException;
    public GetMergeConflictsResponse withMaximumFileContentToLoadExceededException(Object maximumFileContentToLoadExceededException) {
        this.maximumFileContentToLoadExceededException = maximumFileContentToLoadExceededException;
        return this;
    }
    public Object maximumItemsToCompareExceededException;
    public GetMergeConflictsResponse withMaximumItemsToCompareExceededException(Object maximumItemsToCompareExceededException) {
        this.maximumItemsToCompareExceededException = maximumItemsToCompareExceededException;
        return this;
    }
    public Object mergeOptionRequiredException;
    public GetMergeConflictsResponse withMergeOptionRequiredException(Object mergeOptionRequiredException) {
        this.mergeOptionRequiredException = mergeOptionRequiredException;
        return this;
    }
    public Object repositoryDoesNotExistException;
    public GetMergeConflictsResponse withRepositoryDoesNotExistException(Object repositoryDoesNotExistException) {
        this.repositoryDoesNotExistException = repositoryDoesNotExistException;
        return this;
    }
    public Object repositoryNameRequiredException;
    public GetMergeConflictsResponse withRepositoryNameRequiredException(Object repositoryNameRequiredException) {
        this.repositoryNameRequiredException = repositoryNameRequiredException;
        return this;
    }
    public Long statusCode;
    public GetMergeConflictsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tipsDivergenceExceededException;
    public GetMergeConflictsResponse withTipsDivergenceExceededException(Object tipsDivergenceExceededException) {
        this.tipsDivergenceExceededException = tipsDivergenceExceededException;
        return this;
    }
}