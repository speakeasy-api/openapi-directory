package openapisdk.models.operations;



public class GetRepositoryPipelineKnownHostsResponse {
    public String contentType;
    public GetRepositoryPipelineKnownHostsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetRepositoryPipelineKnownHostsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PaginatedPipelineKnownHosts paginatedPipelineKnownHosts;
    public GetRepositoryPipelineKnownHostsResponse withPaginatedPipelineKnownHosts(openapisdk.models.shared.PaginatedPipelineKnownHosts paginatedPipelineKnownHosts) {
        this.paginatedPipelineKnownHosts = paginatedPipelineKnownHosts;
        return this;
    }
}