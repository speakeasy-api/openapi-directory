package openapisdk.models.operations;



public class BatchAssociateApprovalRuleTemplateWithRepositoriesResponse {
    public Object approvalRuleTemplateDoesNotExistException;
    public BatchAssociateApprovalRuleTemplateWithRepositoriesResponse withApprovalRuleTemplateDoesNotExistException(Object approvalRuleTemplateDoesNotExistException) {
        this.approvalRuleTemplateDoesNotExistException = approvalRuleTemplateDoesNotExistException;
        return this;
    }
    public Object approvalRuleTemplateNameRequiredException;
    public BatchAssociateApprovalRuleTemplateWithRepositoriesResponse withApprovalRuleTemplateNameRequiredException(Object approvalRuleTemplateNameRequiredException) {
        this.approvalRuleTemplateNameRequiredException = approvalRuleTemplateNameRequiredException;
        return this;
    }
    public openapisdk.models.shared.BatchAssociateApprovalRuleTemplateWithRepositoriesOutput batchAssociateApprovalRuleTemplateWithRepositoriesOutput;
    public BatchAssociateApprovalRuleTemplateWithRepositoriesResponse withBatchAssociateApprovalRuleTemplateWithRepositoriesOutput(openapisdk.models.shared.BatchAssociateApprovalRuleTemplateWithRepositoriesOutput batchAssociateApprovalRuleTemplateWithRepositoriesOutput) {
        this.batchAssociateApprovalRuleTemplateWithRepositoriesOutput = batchAssociateApprovalRuleTemplateWithRepositoriesOutput;
        return this;
    }
    public String contentType;
    public BatchAssociateApprovalRuleTemplateWithRepositoriesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object encryptionIntegrityChecksFailedException;
    public BatchAssociateApprovalRuleTemplateWithRepositoriesResponse withEncryptionIntegrityChecksFailedException(Object encryptionIntegrityChecksFailedException) {
        this.encryptionIntegrityChecksFailedException = encryptionIntegrityChecksFailedException;
        return this;
    }
    public Object encryptionKeyAccessDeniedException;
    public BatchAssociateApprovalRuleTemplateWithRepositoriesResponse withEncryptionKeyAccessDeniedException(Object encryptionKeyAccessDeniedException) {
        this.encryptionKeyAccessDeniedException = encryptionKeyAccessDeniedException;
        return this;
    }
    public Object encryptionKeyDisabledException;
    public BatchAssociateApprovalRuleTemplateWithRepositoriesResponse withEncryptionKeyDisabledException(Object encryptionKeyDisabledException) {
        this.encryptionKeyDisabledException = encryptionKeyDisabledException;
        return this;
    }
    public Object encryptionKeyNotFoundException;
    public BatchAssociateApprovalRuleTemplateWithRepositoriesResponse withEncryptionKeyNotFoundException(Object encryptionKeyNotFoundException) {
        this.encryptionKeyNotFoundException = encryptionKeyNotFoundException;
        return this;
    }
    public Object encryptionKeyUnavailableException;
    public BatchAssociateApprovalRuleTemplateWithRepositoriesResponse withEncryptionKeyUnavailableException(Object encryptionKeyUnavailableException) {
        this.encryptionKeyUnavailableException = encryptionKeyUnavailableException;
        return this;
    }
    public Object invalidApprovalRuleTemplateNameException;
    public BatchAssociateApprovalRuleTemplateWithRepositoriesResponse withInvalidApprovalRuleTemplateNameException(Object invalidApprovalRuleTemplateNameException) {
        this.invalidApprovalRuleTemplateNameException = invalidApprovalRuleTemplateNameException;
        return this;
    }
    public Object maximumRepositoryNamesExceededException;
    public BatchAssociateApprovalRuleTemplateWithRepositoriesResponse withMaximumRepositoryNamesExceededException(Object maximumRepositoryNamesExceededException) {
        this.maximumRepositoryNamesExceededException = maximumRepositoryNamesExceededException;
        return this;
    }
    public Object repositoryNamesRequiredException;
    public BatchAssociateApprovalRuleTemplateWithRepositoriesResponse withRepositoryNamesRequiredException(Object repositoryNamesRequiredException) {
        this.repositoryNamesRequiredException = repositoryNamesRequiredException;
        return this;
    }
    public Long statusCode;
    public BatchAssociateApprovalRuleTemplateWithRepositoriesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}