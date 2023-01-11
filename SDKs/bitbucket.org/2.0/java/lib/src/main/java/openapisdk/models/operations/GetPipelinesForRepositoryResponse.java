package openapisdk.models.operations;



public class GetPipelinesForRepositoryResponse {
    public String contentType;
    public GetPipelinesForRepositoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetPipelinesForRepositoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PaginatedPipelines paginatedPipelines;
    public GetPipelinesForRepositoryResponse withPaginatedPipelines(openapisdk.models.shared.PaginatedPipelines paginatedPipelines) {
        this.paginatedPipelines = paginatedPipelines;
        return this;
    }
}