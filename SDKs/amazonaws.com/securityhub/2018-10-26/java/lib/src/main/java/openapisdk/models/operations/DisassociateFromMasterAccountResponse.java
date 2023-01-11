package openapisdk.models.operations;



public class DisassociateFromMasterAccountResponse {
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
    public Object internalException;
    public DisassociateFromMasterAccountResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidAccessException;
    public DisassociateFromMasterAccountResponse withInvalidAccessException(Object invalidAccessException) {
        this.invalidAccessException = invalidAccessException;
        return this;
    }
    public Object invalidInputException;
    public DisassociateFromMasterAccountResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object limitExceededException;
    public DisassociateFromMasterAccountResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public DisassociateFromMasterAccountResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DisassociateFromMasterAccountResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}