package openapisdk.models.operations;



public class DeleteRepositoryPipelineKnownHostResponse {
    public String contentType;
    public DeleteRepositoryPipelineKnownHostResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DeleteRepositoryPipelineKnownHostResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public DeleteRepositoryPipelineKnownHostResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
}