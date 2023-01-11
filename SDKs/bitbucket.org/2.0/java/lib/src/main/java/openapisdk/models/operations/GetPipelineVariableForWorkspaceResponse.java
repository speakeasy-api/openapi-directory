package openapisdk.models.operations;



public class GetPipelineVariableForWorkspaceResponse {
    public String contentType;
    public GetPipelineVariableForWorkspaceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetPipelineVariableForWorkspaceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public GetPipelineVariableForWorkspaceResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public java.util.Map<String, Object> pipelineVariable;
    public GetPipelineVariableForWorkspaceResponse withPipelineVariable(java.util.Map<String, Object> pipelineVariable) {
        this.pipelineVariable = pipelineVariable;
        return this;
    }
}