package openapisdk.models.operations;



public class ListAssociatedApprovalRuleTemplatesForRepositoryResponse {
    public String contentType;
    public ListAssociatedApprovalRuleTemplatesForRepositoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object encryptionIntegrityChecksFailedException;
    public ListAssociatedApprovalRuleTemplatesForRepositoryResponse withEncryptionIntegrityChecksFailedException(Object encryptionIntegrityChecksFailedException) {
        this.encryptionIntegrityChecksFailedException = encryptionIntegrityChecksFailedException;
        return this;
    }
    public Object encryptionKeyAccessDeniedException;
    public ListAssociatedApprovalRuleTemplatesForRepositoryResponse withEncryptionKeyAccessDeniedException(Object encryptionKeyAccessDeniedException) {
        this.encryptionKeyAccessDeniedException = encryptionKeyAccessDeniedException;
        return this;
    }
    public Object encryptionKeyDisabledException;
    public ListAssociatedApprovalRuleTemplatesForRepositoryResponse withEncryptionKeyDisabledException(Object encryptionKeyDisabledException) {
        this.encryptionKeyDisabledException = encryptionKeyDisabledException;
        return this;
    }
    public Object encryptionKeyNotFoundException;
    public ListAssociatedApprovalRuleTemplatesForRepositoryResponse withEncryptionKeyNotFoundException(Object encryptionKeyNotFoundException) {
        this.encryptionKeyNotFoundException = encryptionKeyNotFoundException;
        return this;
    }
    public Object encryptionKeyUnavailableException;
    public ListAssociatedApprovalRuleTemplatesForRepositoryResponse withEncryptionKeyUnavailableException(Object encryptionKeyUnavailableException) {
        this.encryptionKeyUnavailableException = encryptionKeyUnavailableException;
        return this;
    }
    public Object invalidContinuationTokenException;
    public ListAssociatedApprovalRuleTemplatesForRepositoryResponse withInvalidContinuationTokenException(Object invalidContinuationTokenException) {
        this.invalidContinuationTokenException = invalidContinuationTokenException;
        return this;
    }
    public Object invalidMaxResultsException;
    public ListAssociatedApprovalRuleTemplatesForRepositoryResponse withInvalidMaxResultsException(Object invalidMaxResultsException) {
        this.invalidMaxResultsException = invalidMaxResultsException;
        return this;
    }
    public Object invalidRepositoryNameException;
    public ListAssociatedApprovalRuleTemplatesForRepositoryResponse withInvalidRepositoryNameException(Object invalidRepositoryNameException) {
        this.invalidRepositoryNameException = invalidRepositoryNameException;
        return this;
    }
    public openapisdk.models.shared.ListAssociatedApprovalRuleTemplatesForRepositoryOutput listAssociatedApprovalRuleTemplatesForRepositoryOutput;
    public ListAssociatedApprovalRuleTemplatesForRepositoryResponse withListAssociatedApprovalRuleTemplatesForRepositoryOutput(openapisdk.models.shared.ListAssociatedApprovalRuleTemplatesForRepositoryOutput listAssociatedApprovalRuleTemplatesForRepositoryOutput) {
        this.listAssociatedApprovalRuleTemplatesForRepositoryOutput = listAssociatedApprovalRuleTemplatesForRepositoryOutput;
        return this;
    }
    public Object repositoryDoesNotExistException;
    public ListAssociatedApprovalRuleTemplatesForRepositoryResponse withRepositoryDoesNotExistException(Object repositoryDoesNotExistException) {
        this.repositoryDoesNotExistException = repositoryDoesNotExistException;
        return this;
    }
    public Object repositoryNameRequiredException;
    public ListAssociatedApprovalRuleTemplatesForRepositoryResponse withRepositoryNameRequiredException(Object repositoryNameRequiredException) {
        this.repositoryNameRequiredException = repositoryNameRequiredException;
        return this;
    }
    public Long statusCode;
    public ListAssociatedApprovalRuleTemplatesForRepositoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}