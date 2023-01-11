package openapisdk.models.operations;



public class TaskTemplatesListResponse {
    public String contentType;
    public TaskTemplatesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TaskTemplatesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public TaskTemplatesList200ApplicationJson taskTemplatesList200ApplicationJSONObject;
    public TaskTemplatesListResponse withTaskTemplatesList200ApplicationJsonObject(TaskTemplatesList200ApplicationJson taskTemplatesList200ApplicationJSONObject) {
        this.taskTemplatesList200ApplicationJSONObject = taskTemplatesList200ApplicationJSONObject;
        return this;
    }
}