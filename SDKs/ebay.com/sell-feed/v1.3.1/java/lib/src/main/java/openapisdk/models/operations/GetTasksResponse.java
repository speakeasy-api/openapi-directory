package openapisdk.models.operations;



public class GetTasksResponse {
    public String contentType;
    public GetTasksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetTasksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TaskCollection taskCollection;
    public GetTasksResponse withTaskCollection(openapisdk.models.shared.TaskCollection taskCollection) {
        this.taskCollection = taskCollection;
        return this;
    }
}