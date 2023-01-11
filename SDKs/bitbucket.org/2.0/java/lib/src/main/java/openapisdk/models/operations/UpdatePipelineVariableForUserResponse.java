package openapisdk.models.operations;



public class UpdatePipelineVariableForUserResponse {
    public String contentType;
    public UpdatePipelineVariableForUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdatePipelineVariableForUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public UpdatePipelineVariableForUserResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public java.util.Map<String, Object> pipelineVariable;
    public UpdatePipelineVariableForUserResponse withPipelineVariable(java.util.Map<String, Object> pipelineVariable) {
        this.pipelineVariable = pipelineVariable;
        return this;
    }
}