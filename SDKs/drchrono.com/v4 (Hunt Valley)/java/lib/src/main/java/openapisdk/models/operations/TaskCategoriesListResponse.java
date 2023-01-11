package openapisdk.models.operations;



public class TaskCategoriesListResponse {
    public String contentType;
    public TaskCategoriesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TaskCategoriesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public TaskCategoriesList200ApplicationJson taskCategoriesList200ApplicationJSONObject;
    public TaskCategoriesListResponse withTaskCategoriesList200ApplicationJsonObject(TaskCategoriesList200ApplicationJson taskCategoriesList200ApplicationJSONObject) {
        this.taskCategoriesList200ApplicationJSONObject = taskCategoriesList200ApplicationJSONObject;
        return this;
    }
}