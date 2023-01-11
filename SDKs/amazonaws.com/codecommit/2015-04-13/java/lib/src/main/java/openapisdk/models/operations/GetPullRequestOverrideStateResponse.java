package openapisdk.models.operations;



public class GetPullRequestOverrideStateResponse {
    public String contentType;
    public GetPullRequestOverrideStateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object encryptionIntegrityChecksFailedException;
    public GetPullRequestOverrideStateResponse withEncryptionIntegrityChecksFailedException(Object encryptionIntegrityChecksFailedException) {
        this.encryptionIntegrityChecksFailedException = encryptionIntegrityChecksFailedException;
        return this;
    }
    public Object encryptionKeyAccessDeniedException;
    public GetPullRequestOverrideStateResponse withEncryptionKeyAccessDeniedException(Object encryptionKeyAccessDeniedException) {
        this.encryptionKeyAccessDeniedException = encryptionKeyAccessDeniedException;
        return this;
    }
    public Object encryptionKeyDisabledException;
    public GetPullRequestOverrideStateResponse withEncryptionKeyDisabledException(Object encryptionKeyDisabledException) {
        this.encryptionKeyDisabledException = encryptionKeyDisabledException;
        return this;
    }
    public Object encryptionKeyNotFoundException;
    public GetPullRequestOverrideStateResponse withEncryptionKeyNotFoundException(Object encryptionKeyNotFoundException) {
        this.encryptionKeyNotFoundException = encryptionKeyNotFoundException;
        return this;
    }
    public Object encryptionKeyUnavailableException;
    public GetPullRequestOverrideStateResponse withEncryptionKeyUnavailableException(Object encryptionKeyUnavailableException) {
        this.encryptionKeyUnavailableException = encryptionKeyUnavailableException;
        return this;
    }
    public openapisdk.models.shared.GetPullRequestOverrideStateOutput getPullRequestOverrideStateOutput;
    public GetPullRequestOverrideStateResponse withGetPullRequestOverrideStateOutput(openapisdk.models.shared.GetPullRequestOverrideStateOutput getPullRequestOverrideStateOutput) {
        this.getPullRequestOverrideStateOutput = getPullRequestOverrideStateOutput;
        return this;
    }
    public Object invalidPullRequestIdException;
    public GetPullRequestOverrideStateResponse withInvalidPullRequestIdException(Object invalidPullRequestIdException) {
        this.invalidPullRequestIdException = invalidPullRequestIdException;
        return this;
    }
    public Object invalidRevisionIdException;
    public GetPullRequestOverrideStateResponse withInvalidRevisionIdException(Object invalidRevisionIdException) {
        this.invalidRevisionIdException = invalidRevisionIdException;
        return this;
    }
    public Object pullRequestDoesNotExistException;
    public GetPullRequestOverrideStateResponse withPullRequestDoesNotExistException(Object pullRequestDoesNotExistException) {
        this.pullRequestDoesNotExistException = pullRequestDoesNotExistException;
        return this;
    }
    public Object pullRequestIdRequiredException;
    public GetPullRequestOverrideStateResponse withPullRequestIdRequiredException(Object pullRequestIdRequiredException) {
        this.pullRequestIdRequiredException = pullRequestIdRequiredException;
        return this;
    }
    public Object revisionIdRequiredException;
    public GetPullRequestOverrideStateResponse withRevisionIdRequiredException(Object revisionIdRequiredException) {
        this.revisionIdRequiredException = revisionIdRequiredException;
        return this;
    }
    public Long statusCode;
    public GetPullRequestOverrideStateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}