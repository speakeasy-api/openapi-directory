package openapisdk.models.operations;



public class GetPipelineVariablesForWorkspaceResponse {
    public String contentType;
    public GetPipelineVariablesForWorkspaceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetPipelineVariablesForWorkspaceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PaginatedPipelineVariables paginatedPipelineVariables;
    public GetPipelineVariablesForWorkspaceResponse withPaginatedPipelineVariables(openapisdk.models.shared.PaginatedPipelineVariables paginatedPipelineVariables) {
        this.paginatedPipelineVariables = paginatedPipelineVariables;
        return this;
    }
}