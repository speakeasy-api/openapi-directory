package openapisdk.models.operations;



public class GetPipelineVariableForTeamResponse {
    public String contentType;
    public GetPipelineVariableForTeamResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetPipelineVariableForTeamResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public GetPipelineVariableForTeamResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public java.util.Map<String, Object> pipelineVariable;
    public GetPipelineVariableForTeamResponse withPipelineVariable(java.util.Map<String, Object> pipelineVariable) {
        this.pipelineVariable = pipelineVariable;
        return this;
    }
}