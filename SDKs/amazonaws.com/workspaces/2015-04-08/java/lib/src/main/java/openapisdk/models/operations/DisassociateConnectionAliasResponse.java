package openapisdk.models.operations;



public class DisassociateConnectionAliasResponse {
    public Object accessDeniedException;
    public DisassociateConnectionAliasResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DisassociateConnectionAliasResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> disassociateConnectionAliasResult;
    public DisassociateConnectionAliasResponse withDisassociateConnectionAliasResult(java.util.Map<String, Object> disassociateConnectionAliasResult) {
        this.disassociateConnectionAliasResult = disassociateConnectionAliasResult;
        return this;
    }
    public Object invalidParameterValuesException;
    public DisassociateConnectionAliasResponse withInvalidParameterValuesException(Object invalidParameterValuesException) {
        this.invalidParameterValuesException = invalidParameterValuesException;
        return this;
    }
    public Object invalidResourceStateException;
    public DisassociateConnectionAliasResponse withInvalidResourceStateException(Object invalidResourceStateException) {
        this.invalidResourceStateException = invalidResourceStateException;
        return this;
    }
    public Object operationNotSupportedException;
    public DisassociateConnectionAliasResponse withOperationNotSupportedException(Object operationNotSupportedException) {
        this.operationNotSupportedException = operationNotSupportedException;
        return this;
    }
    public Object resourceNotFoundException;
    public DisassociateConnectionAliasResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DisassociateConnectionAliasResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}