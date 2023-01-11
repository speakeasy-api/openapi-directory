package openapisdk.models.operations;



public class ModifyWorkspacePropertiesResponse {
    public Object accessDeniedException;
    public ModifyWorkspacePropertiesResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ModifyWorkspacePropertiesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterValuesException;
    public ModifyWorkspacePropertiesResponse withInvalidParameterValuesException(Object invalidParameterValuesException) {
        this.invalidParameterValuesException = invalidParameterValuesException;
        return this;
    }
    public Object invalidResourceStateException;
    public ModifyWorkspacePropertiesResponse withInvalidResourceStateException(Object invalidResourceStateException) {
        this.invalidResourceStateException = invalidResourceStateException;
        return this;
    }
    public java.util.Map<String, Object> modifyWorkspacePropertiesResult;
    public ModifyWorkspacePropertiesResponse withModifyWorkspacePropertiesResult(java.util.Map<String, Object> modifyWorkspacePropertiesResult) {
        this.modifyWorkspacePropertiesResult = modifyWorkspacePropertiesResult;
        return this;
    }
    public Object operationInProgressException;
    public ModifyWorkspacePropertiesResponse withOperationInProgressException(Object operationInProgressException) {
        this.operationInProgressException = operationInProgressException;
        return this;
    }
    public Object resourceNotFoundException;
    public ModifyWorkspacePropertiesResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object resourceUnavailableException;
    public ModifyWorkspacePropertiesResponse withResourceUnavailableException(Object resourceUnavailableException) {
        this.resourceUnavailableException = resourceUnavailableException;
        return this;
    }
    public Long statusCode;
    public ModifyWorkspacePropertiesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unsupportedWorkspaceConfigurationException;
    public ModifyWorkspacePropertiesResponse withUnsupportedWorkspaceConfigurationException(Object unsupportedWorkspaceConfigurationException) {
        this.unsupportedWorkspaceConfigurationException = unsupportedWorkspaceConfigurationException;
        return this;
    }
}