package openapisdk.models.operations;



public class TasksCreateResponse {
    public String contentType;
    public TasksCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TasksCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Task task;
    public TasksCreateResponse withTask(openapisdk.models.shared.Task task) {
        this.task = task;
        return this;
    }
}