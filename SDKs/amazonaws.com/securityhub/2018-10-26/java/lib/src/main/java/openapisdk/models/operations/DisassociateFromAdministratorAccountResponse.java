package openapisdk.models.operations;



public class DisassociateFromAdministratorAccountResponse {
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
    public Object internalException;
    public DisassociateFromAdministratorAccountResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidAccessException;
    public DisassociateFromAdministratorAccountResponse withInvalidAccessException(Object invalidAccessException) {
        this.invalidAccessException = invalidAccessException;
        return this;
    }
    public Object invalidInputException;
    public DisassociateFromAdministratorAccountResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object limitExceededException;
    public DisassociateFromAdministratorAccountResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public DisassociateFromAdministratorAccountResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DisassociateFromAdministratorAccountResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}