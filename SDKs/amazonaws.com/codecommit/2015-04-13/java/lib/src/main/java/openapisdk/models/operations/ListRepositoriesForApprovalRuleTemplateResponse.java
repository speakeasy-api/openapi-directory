package openapisdk.models.operations;



public class ListRepositoriesForApprovalRuleTemplateResponse {
    public Object approvalRuleTemplateDoesNotExistException;
    public ListRepositoriesForApprovalRuleTemplateResponse withApprovalRuleTemplateDoesNotExistException(Object approvalRuleTemplateDoesNotExistException) {
        this.approvalRuleTemplateDoesNotExistException = approvalRuleTemplateDoesNotExistException;
        return this;
    }
    public Object approvalRuleTemplateNameRequiredException;
    public ListRepositoriesForApprovalRuleTemplateResponse withApprovalRuleTemplateNameRequiredException(Object approvalRuleTemplateNameRequiredException) {
        this.approvalRuleTemplateNameRequiredException = approvalRuleTemplateNameRequiredException;
        return this;
    }
    public String contentType;
    public ListRepositoriesForApprovalRuleTemplateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object encryptionIntegrityChecksFailedException;
    public ListRepositoriesForApprovalRuleTemplateResponse withEncryptionIntegrityChecksFailedException(Object encryptionIntegrityChecksFailedException) {
        this.encryptionIntegrityChecksFailedException = encryptionIntegrityChecksFailedException;
        return this;
    }
    public Object encryptionKeyAccessDeniedException;
    public ListRepositoriesForApprovalRuleTemplateResponse withEncryptionKeyAccessDeniedException(Object encryptionKeyAccessDeniedException) {
        this.encryptionKeyAccessDeniedException = encryptionKeyAccessDeniedException;
        return this;
    }
    public Object encryptionKeyDisabledException;
    public ListRepositoriesForApprovalRuleTemplateResponse withEncryptionKeyDisabledException(Object encryptionKeyDisabledException) {
        this.encryptionKeyDisabledException = encryptionKeyDisabledException;
        return this;
    }
    public Object encryptionKeyNotFoundException;
    public ListRepositoriesForApprovalRuleTemplateResponse withEncryptionKeyNotFoundException(Object encryptionKeyNotFoundException) {
        this.encryptionKeyNotFoundException = encryptionKeyNotFoundException;
        return this;
    }
    public Object encryptionKeyUnavailableException;
    public ListRepositoriesForApprovalRuleTemplateResponse withEncryptionKeyUnavailableException(Object encryptionKeyUnavailableException) {
        this.encryptionKeyUnavailableException = encryptionKeyUnavailableException;
        return this;
    }
    public Object invalidApprovalRuleTemplateNameException;
    public ListRepositoriesForApprovalRuleTemplateResponse withInvalidApprovalRuleTemplateNameException(Object invalidApprovalRuleTemplateNameException) {
        this.invalidApprovalRuleTemplateNameException = invalidApprovalRuleTemplateNameException;
        return this;
    }
    public Object invalidContinuationTokenException;
    public ListRepositoriesForApprovalRuleTemplateResponse withInvalidContinuationTokenException(Object invalidContinuationTokenException) {
        this.invalidContinuationTokenException = invalidContinuationTokenException;
        return this;
    }
    public Object invalidMaxResultsException;
    public ListRepositoriesForApprovalRuleTemplateResponse withInvalidMaxResultsException(Object invalidMaxResultsException) {
        this.invalidMaxResultsException = invalidMaxResultsException;
        return this;
    }
    public openapisdk.models.shared.ListRepositoriesForApprovalRuleTemplateOutput listRepositoriesForApprovalRuleTemplateOutput;
    public ListRepositoriesForApprovalRuleTemplateResponse withListRepositoriesForApprovalRuleTemplateOutput(openapisdk.models.shared.ListRepositoriesForApprovalRuleTemplateOutput listRepositoriesForApprovalRuleTemplateOutput) {
        this.listRepositoriesForApprovalRuleTemplateOutput = listRepositoriesForApprovalRuleTemplateOutput;
        return this;
    }
    public Long statusCode;
    public ListRepositoriesForApprovalRuleTemplateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}