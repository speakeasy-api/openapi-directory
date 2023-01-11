package openapisdk.models.operations;



public class DescribePullRequestEventsResponse {
    public Object actorDoesNotExistException;
    public DescribePullRequestEventsResponse withActorDoesNotExistException(Object actorDoesNotExistException) {
        this.actorDoesNotExistException = actorDoesNotExistException;
        return this;
    }
    public String contentType;
    public DescribePullRequestEventsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribePullRequestEventsOutput describePullRequestEventsOutput;
    public DescribePullRequestEventsResponse withDescribePullRequestEventsOutput(openapisdk.models.shared.DescribePullRequestEventsOutput describePullRequestEventsOutput) {
        this.describePullRequestEventsOutput = describePullRequestEventsOutput;
        return this;
    }
    public Object encryptionIntegrityChecksFailedException;
    public DescribePullRequestEventsResponse withEncryptionIntegrityChecksFailedException(Object encryptionIntegrityChecksFailedException) {
        this.encryptionIntegrityChecksFailedException = encryptionIntegrityChecksFailedException;
        return this;
    }
    public Object encryptionKeyAccessDeniedException;
    public DescribePullRequestEventsResponse withEncryptionKeyAccessDeniedException(Object encryptionKeyAccessDeniedException) {
        this.encryptionKeyAccessDeniedException = encryptionKeyAccessDeniedException;
        return this;
    }
    public Object encryptionKeyDisabledException;
    public DescribePullRequestEventsResponse withEncryptionKeyDisabledException(Object encryptionKeyDisabledException) {
        this.encryptionKeyDisabledException = encryptionKeyDisabledException;
        return this;
    }
    public Object encryptionKeyNotFoundException;
    public DescribePullRequestEventsResponse withEncryptionKeyNotFoundException(Object encryptionKeyNotFoundException) {
        this.encryptionKeyNotFoundException = encryptionKeyNotFoundException;
        return this;
    }
    public Object encryptionKeyUnavailableException;
    public DescribePullRequestEventsResponse withEncryptionKeyUnavailableException(Object encryptionKeyUnavailableException) {
        this.encryptionKeyUnavailableException = encryptionKeyUnavailableException;
        return this;
    }
    public Object invalidActorArnException;
    public DescribePullRequestEventsResponse withInvalidActorArnException(Object invalidActorArnException) {
        this.invalidActorArnException = invalidActorArnException;
        return this;
    }
    public Object invalidContinuationTokenException;
    public DescribePullRequestEventsResponse withInvalidContinuationTokenException(Object invalidContinuationTokenException) {
        this.invalidContinuationTokenException = invalidContinuationTokenException;
        return this;
    }
    public Object invalidMaxResultsException;
    public DescribePullRequestEventsResponse withInvalidMaxResultsException(Object invalidMaxResultsException) {
        this.invalidMaxResultsException = invalidMaxResultsException;
        return this;
    }
    public Object invalidPullRequestEventTypeException;
    public DescribePullRequestEventsResponse withInvalidPullRequestEventTypeException(Object invalidPullRequestEventTypeException) {
        this.invalidPullRequestEventTypeException = invalidPullRequestEventTypeException;
        return this;
    }
    public Object invalidPullRequestIdException;
    public DescribePullRequestEventsResponse withInvalidPullRequestIdException(Object invalidPullRequestIdException) {
        this.invalidPullRequestIdException = invalidPullRequestIdException;
        return this;
    }
    public Object pullRequestDoesNotExistException;
    public DescribePullRequestEventsResponse withPullRequestDoesNotExistException(Object pullRequestDoesNotExistException) {
        this.pullRequestDoesNotExistException = pullRequestDoesNotExistException;
        return this;
    }
    public Object pullRequestIdRequiredException;
    public DescribePullRequestEventsResponse withPullRequestIdRequiredException(Object pullRequestIdRequiredException) {
        this.pullRequestIdRequiredException = pullRequestIdRequiredException;
        return this;
    }
    public Long statusCode;
    public DescribePullRequestEventsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}