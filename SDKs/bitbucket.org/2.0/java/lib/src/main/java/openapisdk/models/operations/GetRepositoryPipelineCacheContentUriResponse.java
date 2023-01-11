package openapisdk.models.operations;



public class GetRepositoryPipelineCacheContentUriResponse {
    public String contentType;
    public GetRepositoryPipelineCacheContentUriResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetRepositoryPipelineCacheContentUriResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public GetRepositoryPipelineCacheContentUriResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.PipelineCacheContentUri pipelineCacheContentUri;
    public GetRepositoryPipelineCacheContentUriResponse withPipelineCacheContentUri(openapisdk.models.shared.PipelineCacheContentUri pipelineCacheContentUri) {
        this.pipelineCacheContentUri = pipelineCacheContentUri;
        return this;
    }
}