package openapisdk.models.operations;



public class UpdateRepositoryPipelineKeyPairResponse {
    public String contentType;
    public UpdateRepositoryPipelineKeyPairResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateRepositoryPipelineKeyPairResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public UpdateRepositoryPipelineKeyPairResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public java.util.Map<String, Object> pipelineSshKeyPair;
    public UpdateRepositoryPipelineKeyPairResponse withPipelineSshKeyPair(java.util.Map<String, Object> pipelineSshKeyPair) {
        this.pipelineSshKeyPair = pipelineSshKeyPair;
        return this;
    }
}