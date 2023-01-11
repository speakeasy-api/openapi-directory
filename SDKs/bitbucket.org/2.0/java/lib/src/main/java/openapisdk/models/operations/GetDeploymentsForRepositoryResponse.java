package openapisdk.models.operations;



public class GetDeploymentsForRepositoryResponse {
    public String contentType;
    public GetDeploymentsForRepositoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetDeploymentsForRepositoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PaginatedDeployments paginatedDeployments;
    public GetDeploymentsForRepositoryResponse withPaginatedDeployments(openapisdk.models.shared.PaginatedDeployments paginatedDeployments) {
        this.paginatedDeployments = paginatedDeployments;
        return this;
    }
}