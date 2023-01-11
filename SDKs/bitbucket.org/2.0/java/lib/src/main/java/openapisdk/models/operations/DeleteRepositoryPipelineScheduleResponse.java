package openapisdk.models.operations;



public class DeleteRepositoryPipelineScheduleResponse {
    public String contentType;
    public DeleteRepositoryPipelineScheduleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DeleteRepositoryPipelineScheduleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public DeleteRepositoryPipelineScheduleResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
}