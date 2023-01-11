package openapisdk.models.operations;



public class EvaluatePullRequestApprovalRulesResponse {
    public String contentType;
    public EvaluatePullRequestApprovalRulesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object encryptionIntegrityChecksFailedException;
    public EvaluatePullRequestApprovalRulesResponse withEncryptionIntegrityChecksFailedException(Object encryptionIntegrityChecksFailedException) {
        this.encryptionIntegrityChecksFailedException = encryptionIntegrityChecksFailedException;
        return this;
    }
    public Object encryptionKeyAccessDeniedException;
    public EvaluatePullRequestApprovalRulesResponse withEncryptionKeyAccessDeniedException(Object encryptionKeyAccessDeniedException) {
        this.encryptionKeyAccessDeniedException = encryptionKeyAccessDeniedException;
        return this;
    }
    public Object encryptionKeyDisabledException;
    public EvaluatePullRequestApprovalRulesResponse withEncryptionKeyDisabledException(Object encryptionKeyDisabledException) {
        this.encryptionKeyDisabledException = encryptionKeyDisabledException;
        return this;
    }
    public Object encryptionKeyNotFoundException;
    public EvaluatePullRequestApprovalRulesResponse withEncryptionKeyNotFoundException(Object encryptionKeyNotFoundException) {
        this.encryptionKeyNotFoundException = encryptionKeyNotFoundException;
        return this;
    }
    public Object encryptionKeyUnavailableException;
    public EvaluatePullRequestApprovalRulesResponse withEncryptionKeyUnavailableException(Object encryptionKeyUnavailableException) {
        this.encryptionKeyUnavailableException = encryptionKeyUnavailableException;
        return this;
    }
    public openapisdk.models.shared.EvaluatePullRequestApprovalRulesOutput evaluatePullRequestApprovalRulesOutput;
    public EvaluatePullRequestApprovalRulesResponse withEvaluatePullRequestApprovalRulesOutput(openapisdk.models.shared.EvaluatePullRequestApprovalRulesOutput evaluatePullRequestApprovalRulesOutput) {
        this.evaluatePullRequestApprovalRulesOutput = evaluatePullRequestApprovalRulesOutput;
        return this;
    }
    public Object invalidPullRequestIdException;
    public EvaluatePullRequestApprovalRulesResponse withInvalidPullRequestIdException(Object invalidPullRequestIdException) {
        this.invalidPullRequestIdException = invalidPullRequestIdException;
        return this;
    }
    public Object invalidRevisionIdException;
    public EvaluatePullRequestApprovalRulesResponse withInvalidRevisionIdException(Object invalidRevisionIdException) {
        this.invalidRevisionIdException = invalidRevisionIdException;
        return this;
    }
    public Object pullRequestDoesNotExistException;
    public EvaluatePullRequestApprovalRulesResponse withPullRequestDoesNotExistException(Object pullRequestDoesNotExistException) {
        this.pullRequestDoesNotExistException = pullRequestDoesNotExistException;
        return this;
    }
    public Object pullRequestIdRequiredException;
    public EvaluatePullRequestApprovalRulesResponse withPullRequestIdRequiredException(Object pullRequestIdRequiredException) {
        this.pullRequestIdRequiredException = pullRequestIdRequiredException;
        return this;
    }
    public Object revisionIdRequiredException;
    public EvaluatePullRequestApprovalRulesResponse withRevisionIdRequiredException(Object revisionIdRequiredException) {
        this.revisionIdRequiredException = revisionIdRequiredException;
        return this;
    }
    public Object revisionNotCurrentException;
    public EvaluatePullRequestApprovalRulesResponse withRevisionNotCurrentException(Object revisionNotCurrentException) {
        this.revisionNotCurrentException = revisionNotCurrentException;
        return this;
    }
    public Long statusCode;
    public EvaluatePullRequestApprovalRulesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}