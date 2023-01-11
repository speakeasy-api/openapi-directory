package openapisdk.models.operations;



public class ActionsListArtifactsForRepoResponse {
    public String contentType;
    public ActionsListArtifactsForRepoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ActionsListArtifactsForRepoResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ActionsListArtifactsForRepoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ActionsListArtifactsForRepo200ApplicationJson actionsListArtifactsForRepo200ApplicationJSONObject;
    public ActionsListArtifactsForRepoResponse withActionsListArtifactsForRepo200ApplicationJsonObject(ActionsListArtifactsForRepo200ApplicationJson actionsListArtifactsForRepo200ApplicationJSONObject) {
        this.actionsListArtifactsForRepo200ApplicationJSONObject = actionsListArtifactsForRepo200ApplicationJSONObject;
        return this;
    }
}