package openapisdk.models.operations;



public class BatchDisassociateApprovalRuleTemplateFromRepositoriesResponse {
    public Object approvalRuleTemplateDoesNotExistException;
    public BatchDisassociateApprovalRuleTemplateFromRepositoriesResponse withApprovalRuleTemplateDoesNotExistException(Object approvalRuleTemplateDoesNotExistException) {
        this.approvalRuleTemplateDoesNotExistException = approvalRuleTemplateDoesNotExistException;
        return this;
    }
    public Object approvalRuleTemplateNameRequiredException;
    public BatchDisassociateApprovalRuleTemplateFromRepositoriesResponse withApprovalRuleTemplateNameRequiredException(Object approvalRuleTemplateNameRequiredException) {
        this.approvalRuleTemplateNameRequiredException = approvalRuleTemplateNameRequiredException;
        return this;
    }
    public openapisdk.models.shared.BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput batchDisassociateApprovalRuleTemplateFromRepositoriesOutput;
    public BatchDisassociateApprovalRuleTemplateFromRepositoriesResponse withBatchDisassociateApprovalRuleTemplateFromRepositoriesOutput(openapisdk.models.shared.BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput batchDisassociateApprovalRuleTemplateFromRepositoriesOutput) {
        this.batchDisassociateApprovalRuleTemplateFromRepositoriesOutput = batchDisassociateApprovalRuleTemplateFromRepositoriesOutput;
        return this;
    }
    public String contentType;
    public BatchDisassociateApprovalRuleTemplateFromRepositoriesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object encryptionIntegrityChecksFailedException;
    public BatchDisassociateApprovalRuleTemplateFromRepositoriesResponse withEncryptionIntegrityChecksFailedException(Object encryptionIntegrityChecksFailedException) {
        this.encryptionIntegrityChecksFailedException = encryptionIntegrityChecksFailedException;
        return this;
    }
    public Object encryptionKeyAccessDeniedException;
    public BatchDisassociateApprovalRuleTemplateFromRepositoriesResponse withEncryptionKeyAccessDeniedException(Object encryptionKeyAccessDeniedException) {
        this.encryptionKeyAccessDeniedException = encryptionKeyAccessDeniedException;
        return this;
    }
    public Object encryptionKeyDisabledException;
    public BatchDisassociateApprovalRuleTemplateFromRepositoriesResponse withEncryptionKeyDisabledException(Object encryptionKeyDisabledException) {
        this.encryptionKeyDisabledException = encryptionKeyDisabledException;
        return this;
    }
    public Object encryptionKeyNotFoundException;
    public BatchDisassociateApprovalRuleTemplateFromRepositoriesResponse withEncryptionKeyNotFoundException(Object encryptionKeyNotFoundException) {
        this.encryptionKeyNotFoundException = encryptionKeyNotFoundException;
        return this;
    }
    public Object encryptionKeyUnavailableException;
    public BatchDisassociateApprovalRuleTemplateFromRepositoriesResponse withEncryptionKeyUnavailableException(Object encryptionKeyUnavailableException) {
        this.encryptionKeyUnavailableException = encryptionKeyUnavailableException;
        return this;
    }
    public Object invalidApprovalRuleTemplateNameException;
    public BatchDisassociateApprovalRuleTemplateFromRepositoriesResponse withInvalidApprovalRuleTemplateNameException(Object invalidApprovalRuleTemplateNameException) {
        this.invalidApprovalRuleTemplateNameException = invalidApprovalRuleTemplateNameException;
        return this;
    }
    public Object maximumRepositoryNamesExceededException;
    public BatchDisassociateApprovalRuleTemplateFromRepositoriesResponse withMaximumRepositoryNamesExceededException(Object maximumRepositoryNamesExceededException) {
        this.maximumRepositoryNamesExceededException = maximumRepositoryNamesExceededException;
        return this;
    }
    public Object repositoryNamesRequiredException;
    public BatchDisassociateApprovalRuleTemplateFromRepositoriesResponse withRepositoryNamesRequiredException(Object repositoryNamesRequiredException) {
        this.repositoryNamesRequiredException = repositoryNamesRequiredException;
        return this;
    }
    public Long statusCode;
    public BatchDisassociateApprovalRuleTemplateFromRepositoriesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}