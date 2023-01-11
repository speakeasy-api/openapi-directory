package openapisdk.models.operations;



public class CreatePullRequestApprovalRuleResponse {
    public Object approvalRuleContentRequiredException;
    public CreatePullRequestApprovalRuleResponse withApprovalRuleContentRequiredException(Object approvalRuleContentRequiredException) {
        this.approvalRuleContentRequiredException = approvalRuleContentRequiredException;
        return this;
    }
    public Object approvalRuleNameAlreadyExistsException;
    public CreatePullRequestApprovalRuleResponse withApprovalRuleNameAlreadyExistsException(Object approvalRuleNameAlreadyExistsException) {
        this.approvalRuleNameAlreadyExistsException = approvalRuleNameAlreadyExistsException;
        return this;
    }
    public Object approvalRuleNameRequiredException;
    public CreatePullRequestApprovalRuleResponse withApprovalRuleNameRequiredException(Object approvalRuleNameRequiredException) {
        this.approvalRuleNameRequiredException = approvalRuleNameRequiredException;
        return this;
    }
    public String contentType;
    public CreatePullRequestApprovalRuleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreatePullRequestApprovalRuleOutput createPullRequestApprovalRuleOutput;
    public CreatePullRequestApprovalRuleResponse withCreatePullRequestApprovalRuleOutput(openapisdk.models.shared.CreatePullRequestApprovalRuleOutput createPullRequestApprovalRuleOutput) {
        this.createPullRequestApprovalRuleOutput = createPullRequestApprovalRuleOutput;
        return this;
    }
    public Object encryptionIntegrityChecksFailedException;
    public CreatePullRequestApprovalRuleResponse withEncryptionIntegrityChecksFailedException(Object encryptionIntegrityChecksFailedException) {
        this.encryptionIntegrityChecksFailedException = encryptionIntegrityChecksFailedException;
        return this;
    }
    public Object encryptionKeyAccessDeniedException;
    public CreatePullRequestApprovalRuleResponse withEncryptionKeyAccessDeniedException(Object encryptionKeyAccessDeniedException) {
        this.encryptionKeyAccessDeniedException = encryptionKeyAccessDeniedException;
        return this;
    }
    public Object encryptionKeyDisabledException;
    public CreatePullRequestApprovalRuleResponse withEncryptionKeyDisabledException(Object encryptionKeyDisabledException) {
        this.encryptionKeyDisabledException = encryptionKeyDisabledException;
        return this;
    }
    public Object encryptionKeyNotFoundException;
    public CreatePullRequestApprovalRuleResponse withEncryptionKeyNotFoundException(Object encryptionKeyNotFoundException) {
        this.encryptionKeyNotFoundException = encryptionKeyNotFoundException;
        return this;
    }
    public Object encryptionKeyUnavailableException;
    public CreatePullRequestApprovalRuleResponse withEncryptionKeyUnavailableException(Object encryptionKeyUnavailableException) {
        this.encryptionKeyUnavailableException = encryptionKeyUnavailableException;
        return this;
    }
    public Object invalidApprovalRuleContentException;
    public CreatePullRequestApprovalRuleResponse withInvalidApprovalRuleContentException(Object invalidApprovalRuleContentException) {
        this.invalidApprovalRuleContentException = invalidApprovalRuleContentException;
        return this;
    }
    public Object invalidApprovalRuleNameException;
    public CreatePullRequestApprovalRuleResponse withInvalidApprovalRuleNameException(Object invalidApprovalRuleNameException) {
        this.invalidApprovalRuleNameException = invalidApprovalRuleNameException;
        return this;
    }
    public Object invalidPullRequestIdException;
    public CreatePullRequestApprovalRuleResponse withInvalidPullRequestIdException(Object invalidPullRequestIdException) {
        this.invalidPullRequestIdException = invalidPullRequestIdException;
        return this;
    }
    public Object numberOfRulesExceededException;
    public CreatePullRequestApprovalRuleResponse withNumberOfRulesExceededException(Object numberOfRulesExceededException) {
        this.numberOfRulesExceededException = numberOfRulesExceededException;
        return this;
    }
    public Object pullRequestAlreadyClosedException;
    public CreatePullRequestApprovalRuleResponse withPullRequestAlreadyClosedException(Object pullRequestAlreadyClosedException) {
        this.pullRequestAlreadyClosedException = pullRequestAlreadyClosedException;
        return this;
    }
    public Object pullRequestDoesNotExistException;
    public CreatePullRequestApprovalRuleResponse withPullRequestDoesNotExistException(Object pullRequestDoesNotExistException) {
        this.pullRequestDoesNotExistException = pullRequestDoesNotExistException;
        return this;
    }
    public Object pullRequestIdRequiredException;
    public CreatePullRequestApprovalRuleResponse withPullRequestIdRequiredException(Object pullRequestIdRequiredException) {
        this.pullRequestIdRequiredException = pullRequestIdRequiredException;
        return this;
    }
    public Long statusCode;
    public CreatePullRequestApprovalRuleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}