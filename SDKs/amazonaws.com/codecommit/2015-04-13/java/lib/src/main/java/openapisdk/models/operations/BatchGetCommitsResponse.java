package openapisdk.models.operations;



public class BatchGetCommitsResponse {
    public openapisdk.models.shared.BatchGetCommitsOutput batchGetCommitsOutput;
    public BatchGetCommitsResponse withBatchGetCommitsOutput(openapisdk.models.shared.BatchGetCommitsOutput batchGetCommitsOutput) {
        this.batchGetCommitsOutput = batchGetCommitsOutput;
        return this;
    }
    public Object commitIdsLimitExceededException;
    public BatchGetCommitsResponse withCommitIdsLimitExceededException(Object commitIdsLimitExceededException) {
        this.commitIdsLimitExceededException = commitIdsLimitExceededException;
        return this;
    }
    public Object commitIdsListRequiredException;
    public BatchGetCommitsResponse withCommitIdsListRequiredException(Object commitIdsListRequiredException) {
        this.commitIdsListRequiredException = commitIdsListRequiredException;
        return this;
    }
    public String contentType;
    public BatchGetCommitsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object encryptionIntegrityChecksFailedException;
    public BatchGetCommitsResponse withEncryptionIntegrityChecksFailedException(Object encryptionIntegrityChecksFailedException) {
        this.encryptionIntegrityChecksFailedException = encryptionIntegrityChecksFailedException;
        return this;
    }
    public Object encryptionKeyAccessDeniedException;
    public BatchGetCommitsResponse withEncryptionKeyAccessDeniedException(Object encryptionKeyAccessDeniedException) {
        this.encryptionKeyAccessDeniedException = encryptionKeyAccessDeniedException;
        return this;
    }
    public Object encryptionKeyDisabledException;
    public BatchGetCommitsResponse withEncryptionKeyDisabledException(Object encryptionKeyDisabledException) {
        this.encryptionKeyDisabledException = encryptionKeyDisabledException;
        return this;
    }
    public Object encryptionKeyNotFoundException;
    public BatchGetCommitsResponse withEncryptionKeyNotFoundException(Object encryptionKeyNotFoundException) {
        this.encryptionKeyNotFoundException = encryptionKeyNotFoundException;
        return this;
    }
    public Object encryptionKeyUnavailableException;
    public BatchGetCommitsResponse withEncryptionKeyUnavailableException(Object encryptionKeyUnavailableException) {
        this.encryptionKeyUnavailableException = encryptionKeyUnavailableException;
        return this;
    }
    public Object invalidRepositoryNameException;
    public BatchGetCommitsResponse withInvalidRepositoryNameException(Object invalidRepositoryNameException) {
        this.invalidRepositoryNameException = invalidRepositoryNameException;
        return this;
    }
    public Object repositoryDoesNotExistException;
    public BatchGetCommitsResponse withRepositoryDoesNotExistException(Object repositoryDoesNotExistException) {
        this.repositoryDoesNotExistException = repositoryDoesNotExistException;
        return this;
    }
    public Object repositoryNameRequiredException;
    public BatchGetCommitsResponse withRepositoryNameRequiredException(Object repositoryNameRequiredException) {
        this.repositoryNameRequiredException = repositoryNameRequiredException;
        return this;
    }
    public Long statusCode;
    public BatchGetCommitsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}