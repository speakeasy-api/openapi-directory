package openapisdk.models.operations;



public class UpdateRepositoryPipelineConfigResponse {
    public String contentType;
    public UpdateRepositoryPipelineConfigResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateRepositoryPipelineConfigResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> pipelinesConfig;
    public UpdateRepositoryPipelineConfigResponse withPipelinesConfig(java.util.Map<String, Object> pipelinesConfig) {
        this.pipelinesConfig = pipelinesConfig;
        return this;
    }
}