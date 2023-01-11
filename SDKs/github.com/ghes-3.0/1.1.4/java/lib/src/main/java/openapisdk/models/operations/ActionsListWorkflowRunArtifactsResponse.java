package openapisdk.models.operations;



public class ActionsListWorkflowRunArtifactsResponse {
    public String contentType;
    public ActionsListWorkflowRunArtifactsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ActionsListWorkflowRunArtifactsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ActionsListWorkflowRunArtifactsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ActionsListWorkflowRunArtifacts200ApplicationJson actionsListWorkflowRunArtifacts200ApplicationJSONObject;
    public ActionsListWorkflowRunArtifactsResponse withActionsListWorkflowRunArtifacts200ApplicationJsonObject(ActionsListWorkflowRunArtifacts200ApplicationJson actionsListWorkflowRunArtifacts200ApplicationJSONObject) {
        this.actionsListWorkflowRunArtifacts200ApplicationJSONObject = actionsListWorkflowRunArtifacts200ApplicationJSONObject;
        return this;
    }
}