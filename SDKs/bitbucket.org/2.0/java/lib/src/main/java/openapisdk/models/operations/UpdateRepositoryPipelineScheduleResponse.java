package openapisdk.models.operations;



public class UpdateRepositoryPipelineScheduleResponse {
    public String contentType;
    public UpdateRepositoryPipelineScheduleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateRepositoryPipelineScheduleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public UpdateRepositoryPipelineScheduleResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public java.util.Map<String, Object> pipelineSchedule;
    public UpdateRepositoryPipelineScheduleResponse withPipelineSchedule(java.util.Map<String, Object> pipelineSchedule) {
        this.pipelineSchedule = pipelineSchedule;
        return this;
    }
}