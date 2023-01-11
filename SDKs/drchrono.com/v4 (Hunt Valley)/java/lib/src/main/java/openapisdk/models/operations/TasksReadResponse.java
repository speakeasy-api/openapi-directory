package openapisdk.models.operations;



public class TasksReadResponse {
    public String contentType;
    public TasksReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TasksReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Task task;
    public TasksReadResponse withTask(openapisdk.models.shared.Task task) {
        this.task = task;
        return this;
    }
}