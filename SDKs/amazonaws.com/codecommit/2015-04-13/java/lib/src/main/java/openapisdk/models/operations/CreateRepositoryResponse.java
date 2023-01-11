package openapisdk.models.operations;



public class CreateRepositoryResponse {
    public String contentType;
    public CreateRepositoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateRepositoryOutput createRepositoryOutput;
    public CreateRepositoryResponse withCreateRepositoryOutput(openapisdk.models.shared.CreateRepositoryOutput createRepositoryOutput) {
        this.createRepositoryOutput = createRepositoryOutput;
        return this;
    }
    public Object encryptionIntegrityChecksFailedException;
    public CreateRepositoryResponse withEncryptionIntegrityChecksFailedException(Object encryptionIntegrityChecksFailedException) {
        this.encryptionIntegrityChecksFailedException = encryptionIntegrityChecksFailedException;
        return this;
    }
    public Object encryptionKeyAccessDeniedException;
    public CreateRepositoryResponse withEncryptionKeyAccessDeniedException(Object encryptionKeyAccessDeniedException) {
        this.encryptionKeyAccessDeniedException = encryptionKeyAccessDeniedException;
        return this;
    }
    public Object encryptionKeyDisabledException;
    public CreateRepositoryResponse withEncryptionKeyDisabledException(Object encryptionKeyDisabledException) {
        this.encryptionKeyDisabledException = encryptionKeyDisabledException;
        return this;
    }
    public Object encryptionKeyNotFoundException;
    public CreateRepositoryResponse withEncryptionKeyNotFoundException(Object encryptionKeyNotFoundException) {
        this.encryptionKeyNotFoundException = encryptionKeyNotFoundException;
        return this;
    }
    public Object encryptionKeyUnavailableException;
    public CreateRepositoryResponse withEncryptionKeyUnavailableException(Object encryptionKeyUnavailableException) {
        this.encryptionKeyUnavailableException = encryptionKeyUnavailableException;
        return this;
    }
    public Object invalidRepositoryDescriptionException;
    public CreateRepositoryResponse withInvalidRepositoryDescriptionException(Object invalidRepositoryDescriptionException) {
        this.invalidRepositoryDescriptionException = invalidRepositoryDescriptionException;
        return this;
    }
    public Object invalidRepositoryNameException;
    public CreateRepositoryResponse withInvalidRepositoryNameException(Object invalidRepositoryNameException) {
        this.invalidRepositoryNameException = invalidRepositoryNameException;
        return this;
    }
    public Object invalidSystemTagUsageException;
    public CreateRepositoryResponse withInvalidSystemTagUsageException(Object invalidSystemTagUsageException) {
        this.invalidSystemTagUsageException = invalidSystemTagUsageException;
        return this;
    }
    public Object invalidTagsMapException;
    public CreateRepositoryResponse withInvalidTagsMapException(Object invalidTagsMapException) {
        this.invalidTagsMapException = invalidTagsMapException;
        return this;
    }
    public Object repositoryLimitExceededException;
    public CreateRepositoryResponse withRepositoryLimitExceededException(Object repositoryLimitExceededException) {
        this.repositoryLimitExceededException = repositoryLimitExceededException;
        return this;
    }
    public Object repositoryNameExistsException;
    public CreateRepositoryResponse withRepositoryNameExistsException(Object repositoryNameExistsException) {
        this.repositoryNameExistsException = repositoryNameExistsException;
        return this;
    }
    public Object repositoryNameRequiredException;
    public CreateRepositoryResponse withRepositoryNameRequiredException(Object repositoryNameRequiredException) {
        this.repositoryNameRequiredException = repositoryNameRequiredException;
        return this;
    }
    public Long statusCode;
    public CreateRepositoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tagPolicyException;
    public CreateRepositoryResponse withTagPolicyException(Object tagPolicyException) {
        this.tagPolicyException = tagPolicyException;
        return this;
    }
    public Object tooManyTagsException;
    public CreateRepositoryResponse withTooManyTagsException(Object tooManyTagsException) {
        this.tooManyTagsException = tooManyTagsException;
        return this;
    }
}