package openapisdk.models.operations;



public class GetRepositoryPipelineScheduleResponse {
    public String contentType;
    public GetRepositoryPipelineScheduleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetRepositoryPipelineScheduleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public GetRepositoryPipelineScheduleResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public java.util.Map<String, Object> pipelineSchedule;
    public GetRepositoryPipelineScheduleResponse withPipelineSchedule(java.util.Map<String, Object> pipelineSchedule) {
        this.pipelineSchedule = pipelineSchedule;
        return this;
    }
}