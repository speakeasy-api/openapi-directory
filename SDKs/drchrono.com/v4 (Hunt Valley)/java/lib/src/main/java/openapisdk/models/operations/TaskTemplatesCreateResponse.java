package openapisdk.models.operations;



public class TaskTemplatesCreateResponse {
    public String contentType;
    public TaskTemplatesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TaskTemplatesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TaskTemplate taskTemplate;
    public TaskTemplatesCreateResponse withTaskTemplate(openapisdk.models.shared.TaskTemplate taskTemplate) {
        this.taskTemplate = taskTemplate;
        return this;
    }
}