package openapisdk.models.operations;



public class ActionsListWorkflowRunsForRepoResponse {
    public String contentType;
    public ActionsListWorkflowRunsForRepoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ActionsListWorkflowRunsForRepoResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ActionsListWorkflowRunsForRepoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ActionsListWorkflowRunsForRepo200ApplicationJson actionsListWorkflowRunsForRepo200ApplicationJSONObject;
    public ActionsListWorkflowRunsForRepoResponse withActionsListWorkflowRunsForRepo200ApplicationJsonObject(ActionsListWorkflowRunsForRepo200ApplicationJson actionsListWorkflowRunsForRepo200ApplicationJSONObject) {
        this.actionsListWorkflowRunsForRepo200ApplicationJSONObject = actionsListWorkflowRunsForRepo200ApplicationJSONObject;
        return this;
    }
}