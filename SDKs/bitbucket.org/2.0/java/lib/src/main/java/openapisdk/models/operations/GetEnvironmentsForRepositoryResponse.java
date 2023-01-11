package openapisdk.models.operations;



public class GetEnvironmentsForRepositoryResponse {
    public String contentType;
    public GetEnvironmentsForRepositoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetEnvironmentsForRepositoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PaginatedEnvironments paginatedEnvironments;
    public GetEnvironmentsForRepositoryResponse withPaginatedEnvironments(openapisdk.models.shared.PaginatedEnvironments paginatedEnvironments) {
        this.paginatedEnvironments = paginatedEnvironments;
        return this;
    }
}