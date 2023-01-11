package openapisdk.models.operations;



public class TasksListResponse {
    public String contentType;
    public TasksListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TasksListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public TasksList200ApplicationJson tasksList200ApplicationJSONObject;
    public TasksListResponse withTasksList200ApplicationJsonObject(TasksList200ApplicationJson tasksList200ApplicationJSONObject) {
        this.tasksList200ApplicationJSONObject = tasksList200ApplicationJSONObject;
        return this;
    }
}