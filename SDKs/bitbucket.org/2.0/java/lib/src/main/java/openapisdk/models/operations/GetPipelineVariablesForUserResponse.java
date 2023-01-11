package openapisdk.models.operations;



public class GetPipelineVariablesForUserResponse {
    public String contentType;
    public GetPipelineVariablesForUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetPipelineVariablesForUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PaginatedPipelineVariables paginatedPipelineVariables;
    public GetPipelineVariablesForUserResponse withPaginatedPipelineVariables(openapisdk.models.shared.PaginatedPipelineVariables paginatedPipelineVariables) {
        this.paginatedPipelineVariables = paginatedPipelineVariables;
        return this;
    }
}