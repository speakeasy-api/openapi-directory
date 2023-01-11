package openapisdk.models.operations;



public class TaskStatusesCreateResponse {
    public String contentType;
    public TaskStatusesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TaskStatusesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TaskStatus taskStatus;
    public TaskStatusesCreateResponse withTaskStatus(openapisdk.models.shared.TaskStatus taskStatus) {
        this.taskStatus = taskStatus;
        return this;
    }
}