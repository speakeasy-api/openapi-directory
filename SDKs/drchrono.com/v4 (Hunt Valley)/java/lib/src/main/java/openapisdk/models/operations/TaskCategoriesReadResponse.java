package openapisdk.models.operations;



public class TaskCategoriesReadResponse {
    public String contentType;
    public TaskCategoriesReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TaskCategoriesReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TaskCategory taskCategory;
    public TaskCategoriesReadResponse withTaskCategory(openapisdk.models.shared.TaskCategory taskCategory) {
        this.taskCategory = taskCategory;
        return this;
    }
}