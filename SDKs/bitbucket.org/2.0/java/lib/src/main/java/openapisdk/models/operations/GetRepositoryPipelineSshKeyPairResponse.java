package openapisdk.models.operations;



public class GetRepositoryPipelineSshKeyPairResponse {
    public String contentType;
    public GetRepositoryPipelineSshKeyPairResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetRepositoryPipelineSshKeyPairResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public GetRepositoryPipelineSshKeyPairResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public java.util.Map<String, Object> pipelineSshKeyPair;
    public GetRepositoryPipelineSshKeyPairResponse withPipelineSshKeyPair(java.util.Map<String, Object> pipelineSshKeyPair) {
        this.pipelineSshKeyPair = pipelineSshKeyPair;
        return this;
    }
}