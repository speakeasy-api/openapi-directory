package openapisdk.models.operations;



public class GetPipelineVariablesForTeamResponse {
    public String contentType;
    public GetPipelineVariablesForTeamResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetPipelineVariablesForTeamResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PaginatedPipelineVariables paginatedPipelineVariables;
    public GetPipelineVariablesForTeamResponse withPaginatedPipelineVariables(openapisdk.models.shared.PaginatedPipelineVariables paginatedPipelineVariables) {
        this.paginatedPipelineVariables = paginatedPipelineVariables;
        return this;
    }
}