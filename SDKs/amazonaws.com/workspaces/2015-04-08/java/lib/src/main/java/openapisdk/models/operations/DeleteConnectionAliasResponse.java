package openapisdk.models.operations;



public class DeleteConnectionAliasResponse {
    public Object accessDeniedException;
    public DeleteConnectionAliasResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DeleteConnectionAliasResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteConnectionAliasResult;
    public DeleteConnectionAliasResponse withDeleteConnectionAliasResult(java.util.Map<String, Object> deleteConnectionAliasResult) {
        this.deleteConnectionAliasResult = deleteConnectionAliasResult;
        return this;
    }
    public Object invalidParameterValuesException;
    public DeleteConnectionAliasResponse withInvalidParameterValuesException(Object invalidParameterValuesException) {
        this.invalidParameterValuesException = invalidParameterValuesException;
        return this;
    }
    public Object invalidResourceStateException;
    public DeleteConnectionAliasResponse withInvalidResourceStateException(Object invalidResourceStateException) {
        this.invalidResourceStateException = invalidResourceStateException;
        return this;
    }
    public Object operationNotSupportedException;
    public DeleteConnectionAliasResponse withOperationNotSupportedException(Object operationNotSupportedException) {
        this.operationNotSupportedException = operationNotSupportedException;
        return this;
    }
    public Object resourceAssociatedException;
    public DeleteConnectionAliasResponse withResourceAssociatedException(Object resourceAssociatedException) {
        this.resourceAssociatedException = resourceAssociatedException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteConnectionAliasResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteConnectionAliasResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}