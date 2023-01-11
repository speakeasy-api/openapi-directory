package openapisdk.models.operations;



public class UpdateRepositoryPipelineKnownHostResponse {
    public String contentType;
    public UpdateRepositoryPipelineKnownHostResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateRepositoryPipelineKnownHostResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public UpdateRepositoryPipelineKnownHostResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public java.util.Map<String, Object> pipelineKnownHost;
    public UpdateRepositoryPipelineKnownHostResponse withPipelineKnownHost(java.util.Map<String, Object> pipelineKnownHost) {
        this.pipelineKnownHost = pipelineKnownHost;
        return this;
    }
}