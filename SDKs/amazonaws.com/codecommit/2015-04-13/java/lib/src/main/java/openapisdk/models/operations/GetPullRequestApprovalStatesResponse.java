package openapisdk.models.operations;



public class GetPullRequestApprovalStatesResponse {
    public String contentType;
    public GetPullRequestApprovalStatesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object encryptionIntegrityChecksFailedException;
    public GetPullRequestApprovalStatesResponse withEncryptionIntegrityChecksFailedException(Object encryptionIntegrityChecksFailedException) {
        this.encryptionIntegrityChecksFailedException = encryptionIntegrityChecksFailedException;
        return this;
    }
    public Object encryptionKeyAccessDeniedException;
    public GetPullRequestApprovalStatesResponse withEncryptionKeyAccessDeniedException(Object encryptionKeyAccessDeniedException) {
        this.encryptionKeyAccessDeniedException = encryptionKeyAccessDeniedException;
        return this;
    }
    public Object encryptionKeyDisabledException;
    public GetPullRequestApprovalStatesResponse withEncryptionKeyDisabledException(Object encryptionKeyDisabledException) {
        this.encryptionKeyDisabledException = encryptionKeyDisabledException;
        return this;
    }
    public Object encryptionKeyNotFoundException;
    public GetPullRequestApprovalStatesResponse withEncryptionKeyNotFoundException(Object encryptionKeyNotFoundException) {
        this.encryptionKeyNotFoundException = encryptionKeyNotFoundException;
        return this;
    }
    public Object encryptionKeyUnavailableException;
    public GetPullRequestApprovalStatesResponse withEncryptionKeyUnavailableException(Object encryptionKeyUnavailableException) {
        this.encryptionKeyUnavailableException = encryptionKeyUnavailableException;
        return this;
    }
    public openapisdk.models.shared.GetPullRequestApprovalStatesOutput getPullRequestApprovalStatesOutput;
    public GetPullRequestApprovalStatesResponse withGetPullRequestApprovalStatesOutput(openapisdk.models.shared.GetPullRequestApprovalStatesOutput getPullRequestApprovalStatesOutput) {
        this.getPullRequestApprovalStatesOutput = getPullRequestApprovalStatesOutput;
        return this;
    }
    public Object invalidPullRequestIdException;
    public GetPullRequestApprovalStatesResponse withInvalidPullRequestIdException(Object invalidPullRequestIdException) {
        this.invalidPullRequestIdException = invalidPullRequestIdException;
        return this;
    }
    public Object invalidRevisionIdException;
    public GetPullRequestApprovalStatesResponse withInvalidRevisionIdException(Object invalidRevisionIdException) {
        this.invalidRevisionIdException = invalidRevisionIdException;
        return this;
    }
    public Object pullRequestDoesNotExistException;
    public GetPullRequestApprovalStatesResponse withPullRequestDoesNotExistException(Object pullRequestDoesNotExistException) {
        this.pullRequestDoesNotExistException = pullRequestDoesNotExistException;
        return this;
    }
    public Object pullRequestIdRequiredException;
    public GetPullRequestApprovalStatesResponse withPullRequestIdRequiredException(Object pullRequestIdRequiredException) {
        this.pullRequestIdRequiredException = pullRequestIdRequiredException;
        return this;
    }
    public Object revisionIdRequiredException;
    public GetPullRequestApprovalStatesResponse withRevisionIdRequiredException(Object revisionIdRequiredException) {
        this.revisionIdRequiredException = revisionIdRequiredException;
        return this;
    }
    public Long statusCode;
    public GetPullRequestApprovalStatesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}