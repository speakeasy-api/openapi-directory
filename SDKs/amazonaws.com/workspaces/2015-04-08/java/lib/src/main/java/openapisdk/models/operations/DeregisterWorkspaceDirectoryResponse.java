package openapisdk.models.operations;



public class DeregisterWorkspaceDirectoryResponse {
    public Object accessDeniedException;
    public DeregisterWorkspaceDirectoryResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DeregisterWorkspaceDirectoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deregisterWorkspaceDirectoryResult;
    public DeregisterWorkspaceDirectoryResponse withDeregisterWorkspaceDirectoryResult(java.util.Map<String, Object> deregisterWorkspaceDirectoryResult) {
        this.deregisterWorkspaceDirectoryResult = deregisterWorkspaceDirectoryResult;
        return this;
    }
    public Object invalidParameterValuesException;
    public DeregisterWorkspaceDirectoryResponse withInvalidParameterValuesException(Object invalidParameterValuesException) {
        this.invalidParameterValuesException = invalidParameterValuesException;
        return this;
    }
    public Object invalidResourceStateException;
    public DeregisterWorkspaceDirectoryResponse withInvalidResourceStateException(Object invalidResourceStateException) {
        this.invalidResourceStateException = invalidResourceStateException;
        return this;
    }
    public Object operationNotSupportedException;
    public DeregisterWorkspaceDirectoryResponse withOperationNotSupportedException(Object operationNotSupportedException) {
        this.operationNotSupportedException = operationNotSupportedException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeregisterWorkspaceDirectoryResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeregisterWorkspaceDirectoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}