package openapisdk.models.operations;



public class DisassociateFromAdministratorAccountResponse {
    public Object accessDeniedException;
    public DisassociateFromAdministratorAccountResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public DisassociateFromAdministratorAccountResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public DisassociateFromAdministratorAccountResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> disassociateFromAdministratorAccountResponse;
    public DisassociateFromAdministratorAccountResponse withDisassociateFromAdministratorAccountResponse(java.util.Map<String, Object> disassociateFromAdministratorAccountResponse) {
        this.disassociateFromAdministratorAccountResponse = disassociateFromAdministratorAccountResponse;
        return this;
    }
    public Object internalServerException;
    public DisassociateFromAdministratorAccountResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DisassociateFromAdministratorAccountResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public DisassociateFromAdministratorAccountResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public DisassociateFromAdministratorAccountResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DisassociateFromAdministratorAccountResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DisassociateFromAdministratorAccountResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}