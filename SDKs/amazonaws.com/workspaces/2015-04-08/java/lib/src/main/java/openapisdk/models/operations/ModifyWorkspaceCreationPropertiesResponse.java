package openapisdk.models.operations;



public class ModifyWorkspaceCreationPropertiesResponse {
    public Object accessDeniedException;
    public ModifyWorkspaceCreationPropertiesResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ModifyWorkspaceCreationPropertiesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterValuesException;
    public ModifyWorkspaceCreationPropertiesResponse withInvalidParameterValuesException(Object invalidParameterValuesException) {
        this.invalidParameterValuesException = invalidParameterValuesException;
        return this;
    }
    public java.util.Map<String, Object> modifyWorkspaceCreationPropertiesResult;
    public ModifyWorkspaceCreationPropertiesResponse withModifyWorkspaceCreationPropertiesResult(java.util.Map<String, Object> modifyWorkspaceCreationPropertiesResult) {
        this.modifyWorkspaceCreationPropertiesResult = modifyWorkspaceCreationPropertiesResult;
        return this;
    }
    public Object operationNotSupportedException;
    public ModifyWorkspaceCreationPropertiesResponse withOperationNotSupportedException(Object operationNotSupportedException) {
        this.operationNotSupportedException = operationNotSupportedException;
        return this;
    }
    public Object resourceNotFoundException;
    public ModifyWorkspaceCreationPropertiesResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ModifyWorkspaceCreationPropertiesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}