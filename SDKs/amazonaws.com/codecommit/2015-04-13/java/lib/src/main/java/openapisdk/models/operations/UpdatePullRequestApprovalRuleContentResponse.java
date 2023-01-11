package openapisdk.models.operations;



public class UpdatePullRequestApprovalRuleContentResponse {
    public Object approvalRuleContentRequiredException;
    public UpdatePullRequestApprovalRuleContentResponse withApprovalRuleContentRequiredException(Object approvalRuleContentRequiredException) {
        this.approvalRuleContentRequiredException = approvalRuleContentRequiredException;
        return this;
    }
    public Object approvalRuleDoesNotExistException;
    public UpdatePullRequestApprovalRuleContentResponse withApprovalRuleDoesNotExistException(Object approvalRuleDoesNotExistException) {
        this.approvalRuleDoesNotExistException = approvalRuleDoesNotExistException;
        return this;
    }
    public Object approvalRuleNameRequiredException;
    public UpdatePullRequestApprovalRuleContentResponse withApprovalRuleNameRequiredException(Object approvalRuleNameRequiredException) {
        this.approvalRuleNameRequiredException = approvalRuleNameRequiredException;
        return this;
    }
    public Object cannotModifyApprovalRuleFromTemplateException;
    public UpdatePullRequestApprovalRuleContentResponse withCannotModifyApprovalRuleFromTemplateException(Object cannotModifyApprovalRuleFromTemplateException) {
        this.cannotModifyApprovalRuleFromTemplateException = cannotModifyApprovalRuleFromTemplateException;
        return this;
    }
    public String contentType;
    public UpdatePullRequestApprovalRuleContentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object encryptionIntegrityChecksFailedException;
    public UpdatePullRequestApprovalRuleContentResponse withEncryptionIntegrityChecksFailedException(Object encryptionIntegrityChecksFailedException) {
        this.encryptionIntegrityChecksFailedException = encryptionIntegrityChecksFailedException;
        return this;
    }
    public Object encryptionKeyAccessDeniedException;
    public UpdatePullRequestApprovalRuleContentResponse withEncryptionKeyAccessDeniedException(Object encryptionKeyAccessDeniedException) {
        this.encryptionKeyAccessDeniedException = encryptionKeyAccessDeniedException;
        return this;
    }
    public Object encryptionKeyDisabledException;
    public UpdatePullRequestApprovalRuleContentResponse withEncryptionKeyDisabledException(Object encryptionKeyDisabledException) {
        this.encryptionKeyDisabledException = encryptionKeyDisabledException;
        return this;
    }
    public Object encryptionKeyNotFoundException;
    public UpdatePullRequestApprovalRuleContentResponse withEncryptionKeyNotFoundException(Object encryptionKeyNotFoundException) {
        this.encryptionKeyNotFoundException = encryptionKeyNotFoundException;
        return this;
    }
    public Object encryptionKeyUnavailableException;
    public UpdatePullRequestApprovalRuleContentResponse withEncryptionKeyUnavailableException(Object encryptionKeyUnavailableException) {
        this.encryptionKeyUnavailableException = encryptionKeyUnavailableException;
        return this;
    }
    public Object invalidApprovalRuleContentException;
    public UpdatePullRequestApprovalRuleContentResponse withInvalidApprovalRuleContentException(Object invalidApprovalRuleContentException) {
        this.invalidApprovalRuleContentException = invalidApprovalRuleContentException;
        return this;
    }
    public Object invalidApprovalRuleNameException;
    public UpdatePullRequestApprovalRuleContentResponse withInvalidApprovalRuleNameException(Object invalidApprovalRuleNameException) {
        this.invalidApprovalRuleNameException = invalidApprovalRuleNameException;
        return this;
    }
    public Object invalidPullRequestIdException;
    public UpdatePullRequestApprovalRuleContentResponse withInvalidPullRequestIdException(Object invalidPullRequestIdException) {
        this.invalidPullRequestIdException = invalidPullRequestIdException;
        return this;
    }
    public Object invalidRuleContentSha256Exception;
    public UpdatePullRequestApprovalRuleContentResponse withInvalidRuleContentSha256Exception(Object invalidRuleContentSha256Exception) {
        this.invalidRuleContentSha256Exception = invalidRuleContentSha256Exception;
        return this;
    }
    public Object pullRequestAlreadyClosedException;
    public UpdatePullRequestApprovalRuleContentResponse withPullRequestAlreadyClosedException(Object pullRequestAlreadyClosedException) {
        this.pullRequestAlreadyClosedException = pullRequestAlreadyClosedException;
        return this;
    }
    public Object pullRequestDoesNotExistException;
    public UpdatePullRequestApprovalRuleContentResponse withPullRequestDoesNotExistException(Object pullRequestDoesNotExistException) {
        this.pullRequestDoesNotExistException = pullRequestDoesNotExistException;
        return this;
    }
    public Object pullRequestIdRequiredException;
    public UpdatePullRequestApprovalRuleContentResponse withPullRequestIdRequiredException(Object pullRequestIdRequiredException) {
        this.pullRequestIdRequiredException = pullRequestIdRequiredException;
        return this;
    }
    public Long statusCode;
    public UpdatePullRequestApprovalRuleContentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdatePullRequestApprovalRuleContentOutput updatePullRequestApprovalRuleContentOutput;
    public UpdatePullRequestApprovalRuleContentResponse withUpdatePullRequestApprovalRuleContentOutput(openapisdk.models.shared.UpdatePullRequestApprovalRuleContentOutput updatePullRequestApprovalRuleContentOutput) {
        this.updatePullRequestApprovalRuleContentOutput = updatePullRequestApprovalRuleContentOutput;
        return this;
    }
}