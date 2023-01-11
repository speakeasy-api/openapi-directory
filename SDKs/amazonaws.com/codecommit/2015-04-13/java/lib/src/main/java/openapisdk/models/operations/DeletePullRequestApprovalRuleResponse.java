package openapisdk.models.operations;



public class DeletePullRequestApprovalRuleResponse {
    public Object approvalRuleNameRequiredException;
    public DeletePullRequestApprovalRuleResponse withApprovalRuleNameRequiredException(Object approvalRuleNameRequiredException) {
        this.approvalRuleNameRequiredException = approvalRuleNameRequiredException;
        return this;
    }
    public Object cannotDeleteApprovalRuleFromTemplateException;
    public DeletePullRequestApprovalRuleResponse withCannotDeleteApprovalRuleFromTemplateException(Object cannotDeleteApprovalRuleFromTemplateException) {
        this.cannotDeleteApprovalRuleFromTemplateException = cannotDeleteApprovalRuleFromTemplateException;
        return this;
    }
    public String contentType;
    public DeletePullRequestApprovalRuleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeletePullRequestApprovalRuleOutput deletePullRequestApprovalRuleOutput;
    public DeletePullRequestApprovalRuleResponse withDeletePullRequestApprovalRuleOutput(openapisdk.models.shared.DeletePullRequestApprovalRuleOutput deletePullRequestApprovalRuleOutput) {
        this.deletePullRequestApprovalRuleOutput = deletePullRequestApprovalRuleOutput;
        return this;
    }
    public Object encryptionIntegrityChecksFailedException;
    public DeletePullRequestApprovalRuleResponse withEncryptionIntegrityChecksFailedException(Object encryptionIntegrityChecksFailedException) {
        this.encryptionIntegrityChecksFailedException = encryptionIntegrityChecksFailedException;
        return this;
    }
    public Object encryptionKeyAccessDeniedException;
    public DeletePullRequestApprovalRuleResponse withEncryptionKeyAccessDeniedException(Object encryptionKeyAccessDeniedException) {
        this.encryptionKeyAccessDeniedException = encryptionKeyAccessDeniedException;
        return this;
    }
    public Object encryptionKeyDisabledException;
    public DeletePullRequestApprovalRuleResponse withEncryptionKeyDisabledException(Object encryptionKeyDisabledException) {
        this.encryptionKeyDisabledException = encryptionKeyDisabledException;
        return this;
    }
    public Object encryptionKeyNotFoundException;
    public DeletePullRequestApprovalRuleResponse withEncryptionKeyNotFoundException(Object encryptionKeyNotFoundException) {
        this.encryptionKeyNotFoundException = encryptionKeyNotFoundException;
        return this;
    }
    public Object encryptionKeyUnavailableException;
    public DeletePullRequestApprovalRuleResponse withEncryptionKeyUnavailableException(Object encryptionKeyUnavailableException) {
        this.encryptionKeyUnavailableException = encryptionKeyUnavailableException;
        return this;
    }
    public Object invalidApprovalRuleNameException;
    public DeletePullRequestApprovalRuleResponse withInvalidApprovalRuleNameException(Object invalidApprovalRuleNameException) {
        this.invalidApprovalRuleNameException = invalidApprovalRuleNameException;
        return this;
    }
    public Object invalidPullRequestIdException;
    public DeletePullRequestApprovalRuleResponse withInvalidPullRequestIdException(Object invalidPullRequestIdException) {
        this.invalidPullRequestIdException = invalidPullRequestIdException;
        return this;
    }
    public Object pullRequestAlreadyClosedException;
    public DeletePullRequestApprovalRuleResponse withPullRequestAlreadyClosedException(Object pullRequestAlreadyClosedException) {
        this.pullRequestAlreadyClosedException = pullRequestAlreadyClosedException;
        return this;
    }
    public Object pullRequestDoesNotExistException;
    public DeletePullRequestApprovalRuleResponse withPullRequestDoesNotExistException(Object pullRequestDoesNotExistException) {
        this.pullRequestDoesNotExistException = pullRequestDoesNotExistException;
        return this;
    }
    public Object pullRequestIdRequiredException;
    public DeletePullRequestApprovalRuleResponse withPullRequestIdRequiredException(Object pullRequestIdRequiredException) {
        this.pullRequestIdRequiredException = pullRequestIdRequiredException;
        return this;
    }
    public Long statusCode;
    public DeletePullRequestApprovalRuleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}