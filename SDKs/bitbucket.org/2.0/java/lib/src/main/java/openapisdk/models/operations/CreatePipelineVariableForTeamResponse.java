package openapisdk.models.operations;



public class CreatePipelineVariableForTeamResponse {
    public String contentType;
    public CreatePipelineVariableForTeamResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public CreatePipelineVariableForTeamResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public CreatePipelineVariableForTeamResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public CreatePipelineVariableForTeamResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public java.util.Map<String, Object> pipelineVariable;
    public CreatePipelineVariableForTeamResponse withPipelineVariable(java.util.Map<String, Object> pipelineVariable) {
        this.pipelineVariable = pipelineVariable;
        return this;
    }
}