package openapisdk.models.operations;



public class ModifyWorkspaceAccessPropertiesResponse {
    public Object accessDeniedException;
    public ModifyWorkspaceAccessPropertiesResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ModifyWorkspaceAccessPropertiesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> modifyWorkspaceAccessPropertiesResult;
    public ModifyWorkspaceAccessPropertiesResponse withModifyWorkspaceAccessPropertiesResult(java.util.Map<String, Object> modifyWorkspaceAccessPropertiesResult) {
        this.modifyWorkspaceAccessPropertiesResult = modifyWorkspaceAccessPropertiesResult;
        return this;
    }
    public Object resourceNotFoundException;
    public ModifyWorkspaceAccessPropertiesResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ModifyWorkspaceAccessPropertiesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}