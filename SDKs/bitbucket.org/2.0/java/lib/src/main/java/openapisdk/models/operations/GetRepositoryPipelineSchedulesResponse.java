package openapisdk.models.operations;



public class GetRepositoryPipelineSchedulesResponse {
    public String contentType;
    public GetRepositoryPipelineSchedulesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetRepositoryPipelineSchedulesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public GetRepositoryPipelineSchedulesResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.PaginatedPipelineSchedules paginatedPipelineSchedules;
    public GetRepositoryPipelineSchedulesResponse withPaginatedPipelineSchedules(openapisdk.models.shared.PaginatedPipelineSchedules paginatedPipelineSchedules) {
        this.paginatedPipelineSchedules = paginatedPipelineSchedules;
        return this;
    }
}