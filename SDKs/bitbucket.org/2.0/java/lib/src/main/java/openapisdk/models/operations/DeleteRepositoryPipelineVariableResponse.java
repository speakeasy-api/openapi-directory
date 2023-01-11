package openapisdk.models.operations;



public class DeleteRepositoryPipelineVariableResponse {
    public String contentType;
    public DeleteRepositoryPipelineVariableResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DeleteRepositoryPipelineVariableResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public DeleteRepositoryPipelineVariableResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
}