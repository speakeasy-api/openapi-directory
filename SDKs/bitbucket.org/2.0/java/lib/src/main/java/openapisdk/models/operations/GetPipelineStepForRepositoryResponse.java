package openapisdk.models.operations;



public class GetPipelineStepForRepositoryResponse {
    public String contentType;
    public GetPipelineStepForRepositoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetPipelineStepForRepositoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public GetPipelineStepForRepositoryResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public java.util.Map<String, Object> pipelineStep;
    public GetPipelineStepForRepositoryResponse withPipelineStep(java.util.Map<String, Object> pipelineStep) {
        this.pipelineStep = pipelineStep;
        return this;
    }
}