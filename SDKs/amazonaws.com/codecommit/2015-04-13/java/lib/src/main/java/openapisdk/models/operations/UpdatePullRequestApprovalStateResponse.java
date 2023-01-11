package openapisdk.models.operations;



public class UpdatePullRequestApprovalStateResponse {
    public Object approvalStateRequiredException;
    public UpdatePullRequestApprovalStateResponse withApprovalStateRequiredException(Object approvalStateRequiredException) {
        this.approvalStateRequiredException = approvalStateRequiredException;
        return this;
    }
    public String contentType;
    public UpdatePullRequestApprovalStateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object encryptionIntegrityChecksFailedException;
    public UpdatePullRequestApprovalStateResponse withEncryptionIntegrityChecksFailedException(Object encryptionIntegrityChecksFailedException) {
        this.encryptionIntegrityChecksFailedException = encryptionIntegrityChecksFailedException;
        return this;
    }
    public Object encryptionKeyAccessDeniedException;
    public UpdatePullRequestApprovalStateResponse withEncryptionKeyAccessDeniedException(Object encryptionKeyAccessDeniedException) {
        this.encryptionKeyAccessDeniedException = encryptionKeyAccessDeniedException;
        return this;
    }
    public Object encryptionKeyDisabledException;
    public UpdatePullRequestApprovalStateResponse withEncryptionKeyDisabledException(Object encryptionKeyDisabledException) {
        this.encryptionKeyDisabledException = encryptionKeyDisabledException;
        return this;
    }
    public Object encryptionKeyNotFoundException;
    public UpdatePullRequestApprovalStateResponse withEncryptionKeyNotFoundException(Object encryptionKeyNotFoundException) {
        this.encryptionKeyNotFoundException = encryptionKeyNotFoundException;
        return this;
    }
    public Object encryptionKeyUnavailableException;
    public UpdatePullRequestApprovalStateResponse withEncryptionKeyUnavailableException(Object encryptionKeyUnavailableException) {
        this.encryptionKeyUnavailableException = encryptionKeyUnavailableException;
        return this;
    }
    public Object invalidApprovalStateException;
    public UpdatePullRequestApprovalStateResponse withInvalidApprovalStateException(Object invalidApprovalStateException) {
        this.invalidApprovalStateException = invalidApprovalStateException;
        return this;
    }
    public Object invalidPullRequestIdException;
    public UpdatePullRequestApprovalStateResponse withInvalidPullRequestIdException(Object invalidPullRequestIdException) {
        this.invalidPullRequestIdException = invalidPullRequestIdException;
        return this;
    }
    public Object invalidRevisionIdException;
    public UpdatePullRequestApprovalStateResponse withInvalidRevisionIdException(Object invalidRevisionIdException) {
        this.invalidRevisionIdException = invalidRevisionIdException;
        return this;
    }
    public Object maximumNumberOfApprovalsExceededException;
    public UpdatePullRequestApprovalStateResponse withMaximumNumberOfApprovalsExceededException(Object maximumNumberOfApprovalsExceededException) {
        this.maximumNumberOfApprovalsExceededException = maximumNumberOfApprovalsExceededException;
        return this;
    }
    public Object pullRequestAlreadyClosedException;
    public UpdatePullRequestApprovalStateResponse withPullRequestAlreadyClosedException(Object pullRequestAlreadyClosedException) {
        this.pullRequestAlreadyClosedException = pullRequestAlreadyClosedException;
        return this;
    }
    public Object pullRequestCannotBeApprovedByAuthorException;
    public UpdatePullRequestApprovalStateResponse withPullRequestCannotBeApprovedByAuthorException(Object pullRequestCannotBeApprovedByAuthorException) {
        this.pullRequestCannotBeApprovedByAuthorException = pullRequestCannotBeApprovedByAuthorException;
        return this;
    }
    public Object pullRequestDoesNotExistException;
    public UpdatePullRequestApprovalStateResponse withPullRequestDoesNotExistException(Object pullRequestDoesNotExistException) {
        this.pullRequestDoesNotExistException = pullRequestDoesNotExistException;
        return this;
    }
    public Object pullRequestIdRequiredException;
    public UpdatePullRequestApprovalStateResponse withPullRequestIdRequiredException(Object pullRequestIdRequiredException) {
        this.pullRequestIdRequiredException = pullRequestIdRequiredException;
        return this;
    }
    public Object revisionIdRequiredException;
    public UpdatePullRequestApprovalStateResponse withRevisionIdRequiredException(Object revisionIdRequiredException) {
        this.revisionIdRequiredException = revisionIdRequiredException;
        return this;
    }
    public Object revisionNotCurrentException;
    public UpdatePullRequestApprovalStateResponse withRevisionNotCurrentException(Object revisionNotCurrentException) {
        this.revisionNotCurrentException = revisionNotCurrentException;
        return this;
    }
    public Long statusCode;
    public UpdatePullRequestApprovalStateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}