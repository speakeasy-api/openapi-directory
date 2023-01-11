package openapisdk.models.operations;



public class CreateRepositoryPipelineScheduleResponse {
    public String contentType;
    public CreateRepositoryPipelineScheduleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateRepositoryPipelineScheduleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public CreateRepositoryPipelineScheduleResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public java.util.Map<String, Object> pipelineSchedule;
    public CreateRepositoryPipelineScheduleResponse withPipelineSchedule(java.util.Map<String, Object> pipelineSchedule) {
        this.pipelineSchedule = pipelineSchedule;
        return this;
    }
}