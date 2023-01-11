package openapisdk.models.operations;



public class GetRepositoryPipelineVariablesResponse {
    public String contentType;
    public GetRepositoryPipelineVariablesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetRepositoryPipelineVariablesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PaginatedPipelineVariables paginatedPipelineVariables;
    public GetRepositoryPipelineVariablesResponse withPaginatedPipelineVariables(openapisdk.models.shared.PaginatedPipelineVariables paginatedPipelineVariables) {
        this.paginatedPipelineVariables = paginatedPipelineVariables;
        return this;
    }
}