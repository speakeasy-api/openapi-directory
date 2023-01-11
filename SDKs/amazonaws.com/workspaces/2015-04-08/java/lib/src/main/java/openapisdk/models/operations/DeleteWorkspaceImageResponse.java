package openapisdk.models.operations;



public class DeleteWorkspaceImageResponse {
    public Object accessDeniedException;
    public DeleteWorkspaceImageResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DeleteWorkspaceImageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteWorkspaceImageResult;
    public DeleteWorkspaceImageResponse withDeleteWorkspaceImageResult(java.util.Map<String, Object> deleteWorkspaceImageResult) {
        this.deleteWorkspaceImageResult = deleteWorkspaceImageResult;
        return this;
    }
    public Object invalidResourceStateException;
    public DeleteWorkspaceImageResponse withInvalidResourceStateException(Object invalidResourceStateException) {
        this.invalidResourceStateException = invalidResourceStateException;
        return this;
    }
    public Object resourceAssociatedException;
    public DeleteWorkspaceImageResponse withResourceAssociatedException(Object resourceAssociatedException) {
        this.resourceAssociatedException = resourceAssociatedException;
        return this;
    }
    public Long statusCode;
    public DeleteWorkspaceImageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}