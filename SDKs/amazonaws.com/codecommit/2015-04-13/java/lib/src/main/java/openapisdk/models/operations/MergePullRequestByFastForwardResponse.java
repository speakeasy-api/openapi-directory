package openapisdk.models.operations;



public class MergePullRequestByFastForwardResponse {
    public Object concurrentReferenceUpdateException;
    public MergePullRequestByFastForwardResponse withConcurrentReferenceUpdateException(Object concurrentReferenceUpdateException) {
        this.concurrentReferenceUpdateException = concurrentReferenceUpdateException;
        return this;
    }
    public String contentType;
    public MergePullRequestByFastForwardResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object encryptionIntegrityChecksFailedException;
    public MergePullRequestByFastForwardResponse withEncryptionIntegrityChecksFailedException(Object encryptionIntegrityChecksFailedException) {
        this.encryptionIntegrityChecksFailedException = encryptionIntegrityChecksFailedException;
        return this;
    }
    public Object encryptionKeyAccessDeniedException;
    public MergePullRequestByFastForwardResponse withEncryptionKeyAccessDeniedException(Object encryptionKeyAccessDeniedException) {
        this.encryptionKeyAccessDeniedException = encryptionKeyAccessDeniedException;
        return this;
    }
    public Object encryptionKeyDisabledException;
    public MergePullRequestByFastForwardResponse withEncryptionKeyDisabledException(Object encryptionKeyDisabledException) {
        this.encryptionKeyDisabledException = encryptionKeyDisabledException;
        return this;
    }
    public Object encryptionKeyNotFoundException;
    public MergePullRequestByFastForwardResponse withEncryptionKeyNotFoundException(Object encryptionKeyNotFoundException) {
        this.encryptionKeyNotFoundException = encryptionKeyNotFoundException;
        return this;
    }
    public Object encryptionKeyUnavailableException;
    public MergePullRequestByFastForwardResponse withEncryptionKeyUnavailableException(Object encryptionKeyUnavailableException) {
        this.encryptionKeyUnavailableException = encryptionKeyUnavailableException;
        return this;
    }
    public Object invalidCommitIdException;
    public MergePullRequestByFastForwardResponse withInvalidCommitIdException(Object invalidCommitIdException) {
        this.invalidCommitIdException = invalidCommitIdException;
        return this;
    }
    public Object invalidPullRequestIdException;
    public MergePullRequestByFastForwardResponse withInvalidPullRequestIdException(Object invalidPullRequestIdException) {
        this.invalidPullRequestIdException = invalidPullRequestIdException;
        return this;
    }
    public Object invalidRepositoryNameException;
    public MergePullRequestByFastForwardResponse withInvalidRepositoryNameException(Object invalidRepositoryNameException) {
        this.invalidRepositoryNameException = invalidRepositoryNameException;
        return this;
    }
    public Object manualMergeRequiredException;
    public MergePullRequestByFastForwardResponse withManualMergeRequiredException(Object manualMergeRequiredException) {
        this.manualMergeRequiredException = manualMergeRequiredException;
        return this;
    }
    public openapisdk.models.shared.MergePullRequestByFastForwardOutput mergePullRequestByFastForwardOutput;
    public MergePullRequestByFastForwardResponse withMergePullRequestByFastForwardOutput(openapisdk.models.shared.MergePullRequestByFastForwardOutput mergePullRequestByFastForwardOutput) {
        this.mergePullRequestByFastForwardOutput = mergePullRequestByFastForwardOutput;
        return this;
    }
    public Object pullRequestAlreadyClosedException;
    public MergePullRequestByFastForwardResponse withPullRequestAlreadyClosedException(Object pullRequestAlreadyClosedException) {
        this.pullRequestAlreadyClosedException = pullRequestAlreadyClosedException;
        return this;
    }
    public Object pullRequestApprovalRulesNotSatisfiedException;
    public MergePullRequestByFastForwardResponse withPullRequestApprovalRulesNotSatisfiedException(Object pullRequestApprovalRulesNotSatisfiedException) {
        this.pullRequestApprovalRulesNotSatisfiedException = pullRequestApprovalRulesNotSatisfiedException;
        return this;
    }
    public Object pullRequestDoesNotExistException;
    public MergePullRequestByFastForwardResponse withPullRequestDoesNotExistException(Object pullRequestDoesNotExistException) {
        this.pullRequestDoesNotExistException = pullRequestDoesNotExistException;
        return this;
    }
    public Object pullRequestIdRequiredException;
    public MergePullRequestByFastForwardResponse withPullRequestIdRequiredException(Object pullRequestIdRequiredException) {
        this.pullRequestIdRequiredException = pullRequestIdRequiredException;
        return this;
    }
    public Object referenceDoesNotExistException;
    public MergePullRequestByFastForwardResponse withReferenceDoesNotExistException(Object referenceDoesNotExistException) {
        this.referenceDoesNotExistException = referenceDoesNotExistException;
        return this;
    }
    public Object repositoryDoesNotExistException;
    public MergePullRequestByFastForwardResponse withRepositoryDoesNotExistException(Object repositoryDoesNotExistException) {
        this.repositoryDoesNotExistException = repositoryDoesNotExistException;
        return this;
    }
    public Object repositoryNameRequiredException;
    public MergePullRequestByFastForwardResponse withRepositoryNameRequiredException(Object repositoryNameRequiredException) {
        this.repositoryNameRequiredException = repositoryNameRequiredException;
        return this;
    }
    public Object repositoryNotAssociatedWithPullRequestException;
    public MergePullRequestByFastForwardResponse withRepositoryNotAssociatedWithPullRequestException(Object repositoryNotAssociatedWithPullRequestException) {
        this.repositoryNotAssociatedWithPullRequestException = repositoryNotAssociatedWithPullRequestException;
        return this;
    }
    public Long statusCode;
    public MergePullRequestByFastForwardResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tipOfSourceReferenceIsDifferentException;
    public MergePullRequestByFastForwardResponse withTipOfSourceReferenceIsDifferentException(Object tipOfSourceReferenceIsDifferentException) {
        this.tipOfSourceReferenceIsDifferentException = tipOfSourceReferenceIsDifferentException;
        return this;
    }
}