package openapisdk.models.operations;



public class UpdatePullRequestStatusResponse {
    public String contentType;
    public UpdatePullRequestStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object encryptionIntegrityChecksFailedException;
    public UpdatePullRequestStatusResponse withEncryptionIntegrityChecksFailedException(Object encryptionIntegrityChecksFailedException) {
        this.encryptionIntegrityChecksFailedException = encryptionIntegrityChecksFailedException;
        return this;
    }
    public Object encryptionKeyAccessDeniedException;
    public UpdatePullRequestStatusResponse withEncryptionKeyAccessDeniedException(Object encryptionKeyAccessDeniedException) {
        this.encryptionKeyAccessDeniedException = encryptionKeyAccessDeniedException;
        return this;
    }
    public Object encryptionKeyDisabledException;
    public UpdatePullRequestStatusResponse withEncryptionKeyDisabledException(Object encryptionKeyDisabledException) {
        this.encryptionKeyDisabledException = encryptionKeyDisabledException;
        return this;
    }
    public Object encryptionKeyNotFoundException;
    public UpdatePullRequestStatusResponse withEncryptionKeyNotFoundException(Object encryptionKeyNotFoundException) {
        this.encryptionKeyNotFoundException = encryptionKeyNotFoundException;
        return this;
    }
    public Object encryptionKeyUnavailableException;
    public UpdatePullRequestStatusResponse withEncryptionKeyUnavailableException(Object encryptionKeyUnavailableException) {
        this.encryptionKeyUnavailableException = encryptionKeyUnavailableException;
        return this;
    }
    public Object invalidPullRequestIdException;
    public UpdatePullRequestStatusResponse withInvalidPullRequestIdException(Object invalidPullRequestIdException) {
        this.invalidPullRequestIdException = invalidPullRequestIdException;
        return this;
    }
    public Object invalidPullRequestStatusException;
    public UpdatePullRequestStatusResponse withInvalidPullRequestStatusException(Object invalidPullRequestStatusException) {
        this.invalidPullRequestStatusException = invalidPullRequestStatusException;
        return this;
    }
    public Object invalidPullRequestStatusUpdateException;
    public UpdatePullRequestStatusResponse withInvalidPullRequestStatusUpdateException(Object invalidPullRequestStatusUpdateException) {
        this.invalidPullRequestStatusUpdateException = invalidPullRequestStatusUpdateException;
        return this;
    }
    public Object pullRequestDoesNotExistException;
    public UpdatePullRequestStatusResponse withPullRequestDoesNotExistException(Object pullRequestDoesNotExistException) {
        this.pullRequestDoesNotExistException = pullRequestDoesNotExistException;
        return this;
    }
    public Object pullRequestIdRequiredException;
    public UpdatePullRequestStatusResponse withPullRequestIdRequiredException(Object pullRequestIdRequiredException) {
        this.pullRequestIdRequiredException = pullRequestIdRequiredException;
        return this;
    }
    public Object pullRequestStatusRequiredException;
    public UpdatePullRequestStatusResponse withPullRequestStatusRequiredException(Object pullRequestStatusRequiredException) {
        this.pullRequestStatusRequiredException = pullRequestStatusRequiredException;
        return this;
    }
    public Long statusCode;
    public UpdatePullRequestStatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdatePullRequestStatusOutput updatePullRequestStatusOutput;
    public UpdatePullRequestStatusResponse withUpdatePullRequestStatusOutput(openapisdk.models.shared.UpdatePullRequestStatusOutput updatePullRequestStatusOutput) {
        this.updatePullRequestStatusOutput = updatePullRequestStatusOutput;
        return this;
    }
}