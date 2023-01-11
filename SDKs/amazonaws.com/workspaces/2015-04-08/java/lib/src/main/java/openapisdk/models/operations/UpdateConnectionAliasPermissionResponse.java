package openapisdk.models.operations;



public class UpdateConnectionAliasPermissionResponse {
    public Object accessDeniedException;
    public UpdateConnectionAliasPermissionResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public UpdateConnectionAliasPermissionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterValuesException;
    public UpdateConnectionAliasPermissionResponse withInvalidParameterValuesException(Object invalidParameterValuesException) {
        this.invalidParameterValuesException = invalidParameterValuesException;
        return this;
    }
    public Object invalidResourceStateException;
    public UpdateConnectionAliasPermissionResponse withInvalidResourceStateException(Object invalidResourceStateException) {
        this.invalidResourceStateException = invalidResourceStateException;
        return this;
    }
    public Object operationNotSupportedException;
    public UpdateConnectionAliasPermissionResponse withOperationNotSupportedException(Object operationNotSupportedException) {
        this.operationNotSupportedException = operationNotSupportedException;
        return this;
    }
    public Object resourceAssociatedException;
    public UpdateConnectionAliasPermissionResponse withResourceAssociatedException(Object resourceAssociatedException) {
        this.resourceAssociatedException = resourceAssociatedException;
        return this;
    }
    public Object resourceLimitExceededException;
    public UpdateConnectionAliasPermissionResponse withResourceLimitExceededException(Object resourceLimitExceededException) {
        this.resourceLimitExceededException = resourceLimitExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateConnectionAliasPermissionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateConnectionAliasPermissionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> updateConnectionAliasPermissionResult;
    public UpdateConnectionAliasPermissionResponse withUpdateConnectionAliasPermissionResult(java.util.Map<String, Object> updateConnectionAliasPermissionResult) {
        this.updateConnectionAliasPermissionResult = updateConnectionAliasPermissionResult;
        return this;
    }
}