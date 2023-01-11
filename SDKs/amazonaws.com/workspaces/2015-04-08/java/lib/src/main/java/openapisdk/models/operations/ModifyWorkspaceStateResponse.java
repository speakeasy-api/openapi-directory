package openapisdk.models.operations;



public class ModifyWorkspaceStateResponse {
    public String contentType;
    public ModifyWorkspaceStateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterValuesException;
    public ModifyWorkspaceStateResponse withInvalidParameterValuesException(Object invalidParameterValuesException) {
        this.invalidParameterValuesException = invalidParameterValuesException;
        return this;
    }
    public Object invalidResourceStateException;
    public ModifyWorkspaceStateResponse withInvalidResourceStateException(Object invalidResourceStateException) {
        this.invalidResourceStateException = invalidResourceStateException;
        return this;
    }
    public java.util.Map<String, Object> modifyWorkspaceStateResult;
    public ModifyWorkspaceStateResponse withModifyWorkspaceStateResult(java.util.Map<String, Object> modifyWorkspaceStateResult) {
        this.modifyWorkspaceStateResult = modifyWorkspaceStateResult;
        return this;
    }
    public Object resourceNotFoundException;
    public ModifyWorkspaceStateResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ModifyWorkspaceStateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}