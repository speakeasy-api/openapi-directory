package openapisdk.models.operations;



public class GetPipelineForRepositoryResponse {
    public String contentType;
    public GetPipelineForRepositoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetPipelineForRepositoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public GetPipelineForRepositoryResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public java.util.Map<String, Object> pipeline;
    public GetPipelineForRepositoryResponse withPipeline(java.util.Map<String, Object> pipeline) {
        this.pipeline = pipeline;
        return this;
    }
}