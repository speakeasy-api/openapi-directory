package openapisdk.models.operations;



public class GetRepositoryPipelineScheduleExecutionsResponse {
    public String contentType;
    public GetRepositoryPipelineScheduleExecutionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetRepositoryPipelineScheduleExecutionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public GetRepositoryPipelineScheduleExecutionsResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.PaginatedPipelineScheduleExecutions paginatedPipelineScheduleExecutions;
    public GetRepositoryPipelineScheduleExecutionsResponse withPaginatedPipelineScheduleExecutions(openapisdk.models.shared.PaginatedPipelineScheduleExecutions paginatedPipelineScheduleExecutions) {
        this.paginatedPipelineScheduleExecutions = paginatedPipelineScheduleExecutions;
        return this;
    }
}