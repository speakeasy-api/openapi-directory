package openapisdk.models.operations;



public class UpdateWorkspaceImagePermissionResponse {
    public Object accessDeniedException;
    public UpdateWorkspaceImagePermissionResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public UpdateWorkspaceImagePermissionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterValuesException;
    public UpdateWorkspaceImagePermissionResponse withInvalidParameterValuesException(Object invalidParameterValuesException) {
        this.invalidParameterValuesException = invalidParameterValuesException;
        return this;
    }
    public Object operationNotSupportedException;
    public UpdateWorkspaceImagePermissionResponse withOperationNotSupportedException(Object operationNotSupportedException) {
        this.operationNotSupportedException = operationNotSupportedException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateWorkspaceImagePermissionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object resourceUnavailableException;
    public UpdateWorkspaceImagePermissionResponse withResourceUnavailableException(Object resourceUnavailableException) {
        this.resourceUnavailableException = resourceUnavailableException;
        return this;
    }
    public Long statusCode;
    public UpdateWorkspaceImagePermissionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> updateWorkspaceImagePermissionResult;
    public UpdateWorkspaceImagePermissionResponse withUpdateWorkspaceImagePermissionResult(java.util.Map<String, Object> updateWorkspaceImagePermissionResult) {
        this.updateWorkspaceImagePermissionResult = updateWorkspaceImagePermissionResult;
        return this;
    }
}