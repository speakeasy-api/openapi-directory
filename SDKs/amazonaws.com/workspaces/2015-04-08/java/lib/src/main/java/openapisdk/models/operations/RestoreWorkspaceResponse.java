package openapisdk.models.operations;



public class RestoreWorkspaceResponse {
    public Object accessDeniedException;
    public RestoreWorkspaceResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public RestoreWorkspaceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterValuesException;
    public RestoreWorkspaceResponse withInvalidParameterValuesException(Object invalidParameterValuesException) {
        this.invalidParameterValuesException = invalidParameterValuesException;
        return this;
    }
    public Object resourceNotFoundException;
    public RestoreWorkspaceResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public java.util.Map<String, Object> restoreWorkspaceResult;
    public RestoreWorkspaceResponse withRestoreWorkspaceResult(java.util.Map<String, Object> restoreWorkspaceResult) {
        this.restoreWorkspaceResult = restoreWorkspaceResult;
        return this;
    }
    public Long statusCode;
    public RestoreWorkspaceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}