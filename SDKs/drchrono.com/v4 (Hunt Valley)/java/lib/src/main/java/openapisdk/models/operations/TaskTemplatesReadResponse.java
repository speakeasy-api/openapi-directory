package openapisdk.models.operations;



public class TaskTemplatesReadResponse {
    public String contentType;
    public TaskTemplatesReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TaskTemplatesReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TaskTemplate taskTemplate;
    public TaskTemplatesReadResponse withTaskTemplate(openapisdk.models.shared.TaskTemplate taskTemplate) {
        this.taskTemplate = taskTemplate;
        return this;
    }
}