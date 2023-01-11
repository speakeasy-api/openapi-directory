package openapisdk.models.operations;



public class BatchGetRepositoriesResponse {
    public openapisdk.models.shared.BatchGetRepositoriesOutput batchGetRepositoriesOutput;
    public BatchGetRepositoriesResponse withBatchGetRepositoriesOutput(openapisdk.models.shared.BatchGetRepositoriesOutput batchGetRepositoriesOutput) {
        this.batchGetRepositoriesOutput = batchGetRepositoriesOutput;
        return this;
    }
    public String contentType;
    public BatchGetRepositoriesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object encryptionIntegrityChecksFailedException;
    public BatchGetRepositoriesResponse withEncryptionIntegrityChecksFailedException(Object encryptionIntegrityChecksFailedException) {
        this.encryptionIntegrityChecksFailedException = encryptionIntegrityChecksFailedException;
        return this;
    }
    public Object encryptionKeyAccessDeniedException;
    public BatchGetRepositoriesResponse withEncryptionKeyAccessDeniedException(Object encryptionKeyAccessDeniedException) {
        this.encryptionKeyAccessDeniedException = encryptionKeyAccessDeniedException;
        return this;
    }
    public Object encryptionKeyDisabledException;
    public BatchGetRepositoriesResponse withEncryptionKeyDisabledException(Object encryptionKeyDisabledException) {
        this.encryptionKeyDisabledException = encryptionKeyDisabledException;
        return this;
    }
    public Object encryptionKeyNotFoundException;
    public BatchGetRepositoriesResponse withEncryptionKeyNotFoundException(Object encryptionKeyNotFoundException) {
        this.encryptionKeyNotFoundException = encryptionKeyNotFoundException;
        return this;
    }
    public Object encryptionKeyUnavailableException;
    public BatchGetRepositoriesResponse withEncryptionKeyUnavailableException(Object encryptionKeyUnavailableException) {
        this.encryptionKeyUnavailableException = encryptionKeyUnavailableException;
        return this;
    }
    public Object invalidRepositoryNameException;
    public BatchGetRepositoriesResponse withInvalidRepositoryNameException(Object invalidRepositoryNameException) {
        this.invalidRepositoryNameException = invalidRepositoryNameException;
        return this;
    }
    public Object maximumRepositoryNamesExceededException;
    public BatchGetRepositoriesResponse withMaximumRepositoryNamesExceededException(Object maximumRepositoryNamesExceededException) {
        this.maximumRepositoryNamesExceededException = maximumRepositoryNamesExceededException;
        return this;
    }
    public Object repositoryNamesRequiredException;
    public BatchGetRepositoriesResponse withRepositoryNamesRequiredException(Object repositoryNamesRequiredException) {
        this.repositoryNamesRequiredException = repositoryNamesRequiredException;
        return this;
    }
    public Long statusCode;
    public BatchGetRepositoriesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}