package openapisdk.models.operations;



public class UpdatePipelineVariableForTeamResponse {
    public String contentType;
    public UpdatePipelineVariableForTeamResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdatePipelineVariableForTeamResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public UpdatePipelineVariableForTeamResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public java.util.Map<String, Object> pipelineVariable;
    public UpdatePipelineVariableForTeamResponse withPipelineVariable(java.util.Map<String, Object> pipelineVariable) {
        this.pipelineVariable = pipelineVariable;
        return this;
    }
}