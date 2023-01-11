package openapisdk.models.operations;



public class TaskStatusesReadResponse {
    public String contentType;
    public TaskStatusesReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TaskStatusesReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TaskStatus taskStatus;
    public TaskStatusesReadResponse withTaskStatus(openapisdk.models.shared.TaskStatus taskStatus) {
        this.taskStatus = taskStatus;
        return this;
    }
}