package openapisdk.models.operations;



public class CreatePullRequestResponse {
    public Object clientRequestTokenRequiredException;
    public CreatePullRequestResponse withClientRequestTokenRequiredException(Object clientRequestTokenRequiredException) {
        this.clientRequestTokenRequiredException = clientRequestTokenRequiredException;
        return this;
    }
    public String contentType;
    public CreatePullRequestResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreatePullRequestOutput createPullRequestOutput;
    public CreatePullRequestResponse withCreatePullRequestOutput(openapisdk.models.shared.CreatePullRequestOutput createPullRequestOutput) {
        this.createPullRequestOutput = createPullRequestOutput;
        return this;
    }
    public Object encryptionIntegrityChecksFailedException;
    public CreatePullRequestResponse withEncryptionIntegrityChecksFailedException(Object encryptionIntegrityChecksFailedException) {
        this.encryptionIntegrityChecksFailedException = encryptionIntegrityChecksFailedException;
        return this;
    }
    public Object encryptionKeyAccessDeniedException;
    public CreatePullRequestResponse withEncryptionKeyAccessDeniedException(Object encryptionKeyAccessDeniedException) {
        this.encryptionKeyAccessDeniedException = encryptionKeyAccessDeniedException;
        return this;
    }
    public Object encryptionKeyDisabledException;
    public CreatePullRequestResponse withEncryptionKeyDisabledException(Object encryptionKeyDisabledException) {
        this.encryptionKeyDisabledException = encryptionKeyDisabledException;
        return this;
    }
    public Object encryptionKeyNotFoundException;
    public CreatePullRequestResponse withEncryptionKeyNotFoundException(Object encryptionKeyNotFoundException) {
        this.encryptionKeyNotFoundException = encryptionKeyNotFoundException;
        return this;
    }
    public Object encryptionKeyUnavailableException;
    public CreatePullRequestResponse withEncryptionKeyUnavailableException(Object encryptionKeyUnavailableException) {
        this.encryptionKeyUnavailableException = encryptionKeyUnavailableException;
        return this;
    }
    public Object idempotencyParameterMismatchException;
    public CreatePullRequestResponse withIdempotencyParameterMismatchException(Object idempotencyParameterMismatchException) {
        this.idempotencyParameterMismatchException = idempotencyParameterMismatchException;
        return this;
    }
    public Object invalidClientRequestTokenException;
    public CreatePullRequestResponse withInvalidClientRequestTokenException(Object invalidClientRequestTokenException) {
        this.invalidClientRequestTokenException = invalidClientRequestTokenException;
        return this;
    }
    public Object invalidDescriptionException;
    public CreatePullRequestResponse withInvalidDescriptionException(Object invalidDescriptionException) {
        this.invalidDescriptionException = invalidDescriptionException;
        return this;
    }
    public Object invalidReferenceNameException;
    public CreatePullRequestResponse withInvalidReferenceNameException(Object invalidReferenceNameException) {
        this.invalidReferenceNameException = invalidReferenceNameException;
        return this;
    }
    public Object invalidRepositoryNameException;
    public CreatePullRequestResponse withInvalidRepositoryNameException(Object invalidRepositoryNameException) {
        this.invalidRepositoryNameException = invalidRepositoryNameException;
        return this;
    }
    public Object invalidTargetException;
    public CreatePullRequestResponse withInvalidTargetException(Object invalidTargetException) {
        this.invalidTargetException = invalidTargetException;
        return this;
    }
    public Object invalidTargetsException;
    public CreatePullRequestResponse withInvalidTargetsException(Object invalidTargetsException) {
        this.invalidTargetsException = invalidTargetsException;
        return this;
    }
    public Object invalidTitleException;
    public CreatePullRequestResponse withInvalidTitleException(Object invalidTitleException) {
        this.invalidTitleException = invalidTitleException;
        return this;
    }
    public Object maximumOpenPullRequestsExceededException;
    public CreatePullRequestResponse withMaximumOpenPullRequestsExceededException(Object maximumOpenPullRequestsExceededException) {
        this.maximumOpenPullRequestsExceededException = maximumOpenPullRequestsExceededException;
        return this;
    }
    public Object multipleRepositoriesInPullRequestException;
    public CreatePullRequestResponse withMultipleRepositoriesInPullRequestException(Object multipleRepositoriesInPullRequestException) {
        this.multipleRepositoriesInPullRequestException = multipleRepositoriesInPullRequestException;
        return this;
    }
    public Object referenceDoesNotExistException;
    public CreatePullRequestResponse withReferenceDoesNotExistException(Object referenceDoesNotExistException) {
        this.referenceDoesNotExistException = referenceDoesNotExistException;
        return this;
    }
    public Object referenceNameRequiredException;
    public CreatePullRequestResponse withReferenceNameRequiredException(Object referenceNameRequiredException) {
        this.referenceNameRequiredException = referenceNameRequiredException;
        return this;
    }
    public Object referenceTypeNotSupportedException;
    public CreatePullRequestResponse withReferenceTypeNotSupportedException(Object referenceTypeNotSupportedException) {
        this.referenceTypeNotSupportedException = referenceTypeNotSupportedException;
        return this;
    }
    public Object repositoryDoesNotExistException;
    public CreatePullRequestResponse withRepositoryDoesNotExistException(Object repositoryDoesNotExistException) {
        this.repositoryDoesNotExistException = repositoryDoesNotExistException;
        return this;
    }
    public Object repositoryNameRequiredException;
    public CreatePullRequestResponse withRepositoryNameRequiredException(Object repositoryNameRequiredException) {
        this.repositoryNameRequiredException = repositoryNameRequiredException;
        return this;
    }
    public Object sourceAndDestinationAreSameException;
    public CreatePullRequestResponse withSourceAndDestinationAreSameException(Object sourceAndDestinationAreSameException) {
        this.sourceAndDestinationAreSameException = sourceAndDestinationAreSameException;
        return this;
    }
    public Long statusCode;
    public CreatePullRequestResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object targetRequiredException;
    public CreatePullRequestResponse withTargetRequiredException(Object targetRequiredException) {
        this.targetRequiredException = targetRequiredException;
        return this;
    }
    public Object targetsRequiredException;
    public CreatePullRequestResponse withTargetsRequiredException(Object targetsRequiredException) {
        this.targetsRequiredException = targetsRequiredException;
        return this;
    }
    public Object titleRequiredException;
    public CreatePullRequestResponse withTitleRequiredException(Object titleRequiredException) {
        this.titleRequiredException = titleRequiredException;
        return this;
    }
}