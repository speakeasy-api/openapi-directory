package openapisdk.models.operations;



public class GetPipelineStepsForRepositoryResponse {
    public String contentType;
    public GetPipelineStepsForRepositoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetPipelineStepsForRepositoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PaginatedPipelineSteps paginatedPipelineSteps;
    public GetPipelineStepsForRepositoryResponse withPaginatedPipelineSteps(openapisdk.models.shared.PaginatedPipelineSteps paginatedPipelineSteps) {
        this.paginatedPipelineSteps = paginatedPipelineSteps;
        return this;
    }
}