package openapisdk.models.operations;



public class DisassociateFromMasterAccountResponse {
    public Object accessDeniedException;
    public DisassociateFromMasterAccountResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public DisassociateFromMasterAccountResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public DisassociateFromMasterAccountResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> disassociateFromMasterAccountResponse;
    public DisassociateFromMasterAccountResponse withDisassociateFromMasterAccountResponse(java.util.Map<String, Object> disassociateFromMasterAccountResponse) {
        this.disassociateFromMasterAccountResponse = disassociateFromMasterAccountResponse;
        return this;
    }
    public Object internalServerException;
    public DisassociateFromMasterAccountResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DisassociateFromMasterAccountResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public DisassociateFromMasterAccountResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public DisassociateFromMasterAccountResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DisassociateFromMasterAccountResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DisassociateFromMasterAccountResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}