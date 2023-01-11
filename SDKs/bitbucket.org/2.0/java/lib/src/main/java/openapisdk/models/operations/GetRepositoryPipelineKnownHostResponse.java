package openapisdk.models.operations;



public class GetRepositoryPipelineKnownHostResponse {
    public String contentType;
    public GetRepositoryPipelineKnownHostResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetRepositoryPipelineKnownHostResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public GetRepositoryPipelineKnownHostResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public java.util.Map<String, Object> pipelineKnownHost;
    public GetRepositoryPipelineKnownHostResponse withPipelineKnownHost(java.util.Map<String, Object> pipelineKnownHost) {
        this.pipelineKnownHost = pipelineKnownHost;
        return this;
    }
}