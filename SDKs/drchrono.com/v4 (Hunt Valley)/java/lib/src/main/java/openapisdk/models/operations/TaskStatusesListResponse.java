package openapisdk.models.operations;



public class TaskStatusesListResponse {
    public String contentType;
    public TaskStatusesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TaskStatusesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public TaskStatusesList200ApplicationJson taskStatusesList200ApplicationJSONObject;
    public TaskStatusesListResponse withTaskStatusesList200ApplicationJsonObject(TaskStatusesList200ApplicationJson taskStatusesList200ApplicationJSONObject) {
        this.taskStatusesList200ApplicationJSONObject = taskStatusesList200ApplicationJSONObject;
        return this;
    }
}