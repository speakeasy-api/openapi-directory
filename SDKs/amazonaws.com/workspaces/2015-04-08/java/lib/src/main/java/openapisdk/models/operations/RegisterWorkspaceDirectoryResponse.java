package openapisdk.models.operations;



public class RegisterWorkspaceDirectoryResponse {
    public Object accessDeniedException;
    public RegisterWorkspaceDirectoryResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public RegisterWorkspaceDirectoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterValuesException;
    public RegisterWorkspaceDirectoryResponse withInvalidParameterValuesException(Object invalidParameterValuesException) {
        this.invalidParameterValuesException = invalidParameterValuesException;
        return this;
    }
    public Object invalidResourceStateException;
    public RegisterWorkspaceDirectoryResponse withInvalidResourceStateException(Object invalidResourceStateException) {
        this.invalidResourceStateException = invalidResourceStateException;
        return this;
    }
    public Object operationNotSupportedException;
    public RegisterWorkspaceDirectoryResponse withOperationNotSupportedException(Object operationNotSupportedException) {
        this.operationNotSupportedException = operationNotSupportedException;
        return this;
    }
    public java.util.Map<String, Object> registerWorkspaceDirectoryResult;
    public RegisterWorkspaceDirectoryResponse withRegisterWorkspaceDirectoryResult(java.util.Map<String, Object> registerWorkspaceDirectoryResult) {
        this.registerWorkspaceDirectoryResult = registerWorkspaceDirectoryResult;
        return this;
    }
    public Object resourceLimitExceededException;
    public RegisterWorkspaceDirectoryResponse withResourceLimitExceededException(Object resourceLimitExceededException) {
        this.resourceLimitExceededException = resourceLimitExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public RegisterWorkspaceDirectoryResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public RegisterWorkspaceDirectoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unsupportedNetworkConfigurationException;
    public RegisterWorkspaceDirectoryResponse withUnsupportedNetworkConfigurationException(Object unsupportedNetworkConfigurationException) {
        this.unsupportedNetworkConfigurationException = unsupportedNetworkConfigurationException;
        return this;
    }
    public Object workspacesDefaultRoleNotFoundException;
    public RegisterWorkspaceDirectoryResponse withWorkspacesDefaultRoleNotFoundException(Object workspacesDefaultRoleNotFoundException) {
        this.workspacesDefaultRoleNotFoundException = workspacesDefaultRoleNotFoundException;
        return this;
    }
}