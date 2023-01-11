package openapisdk.models.operations;



public class GetRepositoriesWorkspaceResponse {
    public String contentType;
    public GetRepositoriesWorkspaceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetRepositoriesWorkspaceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public GetRepositoriesWorkspaceResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.PaginatedRepositories paginatedRepositories;
    public GetRepositoriesWorkspaceResponse withPaginatedRepositories(openapisdk.models.shared.PaginatedRepositories paginatedRepositories) {
        this.paginatedRepositories = paginatedRepositories;
        return this;
    }
}