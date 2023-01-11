package openapisdk.models.operations;



public class GetCommentsForPullRequestResponse {
    public Object commitDoesNotExistException;
    public GetCommentsForPullRequestResponse withCommitDoesNotExistException(Object commitDoesNotExistException) {
        this.commitDoesNotExistException = commitDoesNotExistException;
        return this;
    }
    public Object commitIdRequiredException;
    public GetCommentsForPullRequestResponse withCommitIdRequiredException(Object commitIdRequiredException) {
        this.commitIdRequiredException = commitIdRequiredException;
        return this;
    }
    public String contentType;
    public GetCommentsForPullRequestResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object encryptionIntegrityChecksFailedException;
    public GetCommentsForPullRequestResponse withEncryptionIntegrityChecksFailedException(Object encryptionIntegrityChecksFailedException) {
        this.encryptionIntegrityChecksFailedException = encryptionIntegrityChecksFailedException;
        return this;
    }
    public Object encryptionKeyAccessDeniedException;
    public GetCommentsForPullRequestResponse withEncryptionKeyAccessDeniedException(Object encryptionKeyAccessDeniedException) {
        this.encryptionKeyAccessDeniedException = encryptionKeyAccessDeniedException;
        return this;
    }
    public Object encryptionKeyDisabledException;
    public GetCommentsForPullRequestResponse withEncryptionKeyDisabledException(Object encryptionKeyDisabledException) {
        this.encryptionKeyDisabledException = encryptionKeyDisabledException;
        return this;
    }
    public Object encryptionKeyNotFoundException;
    public GetCommentsForPullRequestResponse withEncryptionKeyNotFoundException(Object encryptionKeyNotFoundException) {
        this.encryptionKeyNotFoundException = encryptionKeyNotFoundException;
        return this;
    }
    public Object encryptionKeyUnavailableException;
    public GetCommentsForPullRequestResponse withEncryptionKeyUnavailableException(Object encryptionKeyUnavailableException) {
        this.encryptionKeyUnavailableException = encryptionKeyUnavailableException;
        return this;
    }
    public openapisdk.models.shared.GetCommentsForPullRequestOutput getCommentsForPullRequestOutput;
    public GetCommentsForPullRequestResponse withGetCommentsForPullRequestOutput(openapisdk.models.shared.GetCommentsForPullRequestOutput getCommentsForPullRequestOutput) {
        this.getCommentsForPullRequestOutput = getCommentsForPullRequestOutput;
        return this;
    }
    public Object invalidCommitIdException;
    public GetCommentsForPullRequestResponse withInvalidCommitIdException(Object invalidCommitIdException) {
        this.invalidCommitIdException = invalidCommitIdException;
        return this;
    }
    public Object invalidContinuationTokenException;
    public GetCommentsForPullRequestResponse withInvalidContinuationTokenException(Object invalidContinuationTokenException) {
        this.invalidContinuationTokenException = invalidContinuationTokenException;
        return this;
    }
    public Object invalidMaxResultsException;
    public GetCommentsForPullRequestResponse withInvalidMaxResultsException(Object invalidMaxResultsException) {
        this.invalidMaxResultsException = invalidMaxResultsException;
        return this;
    }
    public Object invalidPullRequestIdException;
    public GetCommentsForPullRequestResponse withInvalidPullRequestIdException(Object invalidPullRequestIdException) {
        this.invalidPullRequestIdException = invalidPullRequestIdException;
        return this;
    }
    public Object invalidRepositoryNameException;
    public GetCommentsForPullRequestResponse withInvalidRepositoryNameException(Object invalidRepositoryNameException) {
        this.invalidRepositoryNameException = invalidRepositoryNameException;
        return this;
    }
    public Object pullRequestDoesNotExistException;
    public GetCommentsForPullRequestResponse withPullRequestDoesNotExistException(Object pullRequestDoesNotExistException) {
        this.pullRequestDoesNotExistException = pullRequestDoesNotExistException;
        return this;
    }
    public Object pullRequestIdRequiredException;
    public GetCommentsForPullRequestResponse withPullRequestIdRequiredException(Object pullRequestIdRequiredException) {
        this.pullRequestIdRequiredException = pullRequestIdRequiredException;
        return this;
    }
    public Object repositoryDoesNotExistException;
    public GetCommentsForPullRequestResponse withRepositoryDoesNotExistException(Object repositoryDoesNotExistException) {
        this.repositoryDoesNotExistException = repositoryDoesNotExistException;
        return this;
    }
    public Object repositoryNameRequiredException;
    public GetCommentsForPullRequestResponse withRepositoryNameRequiredException(Object repositoryNameRequiredException) {
        this.repositoryNameRequiredException = repositoryNameRequiredException;
        return this;
    }
    public Object repositoryNotAssociatedWithPullRequestException;
    public GetCommentsForPullRequestResponse withRepositoryNotAssociatedWithPullRequestException(Object repositoryNotAssociatedWithPullRequestException) {
        this.repositoryNotAssociatedWithPullRequestException = repositoryNotAssociatedWithPullRequestException;
        return this;
    }
    public Long statusCode;
    public GetCommentsForPullRequestResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}