package openapisdk.models.operations;



public class GetTaskResponse {
    public String contentType;
    public GetTaskResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetTaskResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Task task;
    public GetTaskResponse withTask(openapisdk.models.shared.Task task) {
        this.task = task;
        return this;
    }
}