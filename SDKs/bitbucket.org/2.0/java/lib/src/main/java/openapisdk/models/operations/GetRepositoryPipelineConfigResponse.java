package openapisdk.models.operations;



public class GetRepositoryPipelineConfigResponse {
    public String contentType;
    public GetRepositoryPipelineConfigResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetRepositoryPipelineConfigResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> pipelinesConfig;
    public GetRepositoryPipelineConfigResponse withPipelinesConfig(java.util.Map<String, Object> pipelinesConfig) {
        this.pipelinesConfig = pipelinesConfig;
        return this;
    }
}