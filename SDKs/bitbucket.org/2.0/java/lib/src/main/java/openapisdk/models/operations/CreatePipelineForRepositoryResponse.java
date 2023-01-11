package openapisdk.models.operations;



public class CreatePipelineForRepositoryResponse {
    public String contentType;
    public CreatePipelineForRepositoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public CreatePipelineForRepositoryResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public CreatePipelineForRepositoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public CreatePipelineForRepositoryResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public java.util.Map<String, Object> pipeline;
    public CreatePipelineForRepositoryResponse withPipeline(java.util.Map<String, Object> pipeline) {
        this.pipeline = pipeline;
        return this;
    }
}