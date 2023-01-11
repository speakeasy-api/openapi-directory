package openapisdk.models.operations;



public class GetRepositoryPipelineCachesResponse {
    public String contentType;
    public GetRepositoryPipelineCachesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetRepositoryPipelineCachesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public GetRepositoryPipelineCachesResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.PaginatedPipelineCaches paginatedPipelineCaches;
    public GetRepositoryPipelineCachesResponse withPaginatedPipelineCaches(openapisdk.models.shared.PaginatedPipelineCaches paginatedPipelineCaches) {
        this.paginatedPipelineCaches = paginatedPipelineCaches;
        return this;
    }
}