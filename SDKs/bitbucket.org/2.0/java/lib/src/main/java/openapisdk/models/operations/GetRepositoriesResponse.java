package openapisdk.models.operations;



public class GetRepositoriesResponse {
    public String contentType;
    public GetRepositoriesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetRepositoriesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PaginatedRepositories paginatedRepositories;
    public GetRepositoriesResponse withPaginatedRepositories(openapisdk.models.shared.PaginatedRepositories paginatedRepositories) {
        this.paginatedRepositories = paginatedRepositories;
        return this;
    }
}