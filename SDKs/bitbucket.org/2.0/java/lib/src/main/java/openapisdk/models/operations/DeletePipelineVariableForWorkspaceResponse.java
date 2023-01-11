package openapisdk.models.operations;



public class DeletePipelineVariableForWorkspaceResponse {
    public String contentType;
    public DeletePipelineVariableForWorkspaceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DeletePipelineVariableForWorkspaceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public DeletePipelineVariableForWorkspaceResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
}