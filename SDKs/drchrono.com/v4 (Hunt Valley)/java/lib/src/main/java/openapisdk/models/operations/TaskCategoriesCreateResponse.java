package openapisdk.models.operations;



public class TaskCategoriesCreateResponse {
    public String contentType;
    public TaskCategoriesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TaskCategoriesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TaskCategory taskCategory;
    public TaskCategoriesCreateResponse withTaskCategory(openapisdk.models.shared.TaskCategory taskCategory) {
        this.taskCategory = taskCategory;
        return this;
    }
}