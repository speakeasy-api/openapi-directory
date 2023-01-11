package openapisdk.models.operations;



public class DeleteRepositoryPipelineCacheResponse {
    public String contentType;
    public DeleteRepositoryPipelineCacheResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DeleteRepositoryPipelineCacheResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public DeleteRepositoryPipelineCacheResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
}