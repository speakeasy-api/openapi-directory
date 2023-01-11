package openapisdk.models.operations;



public class DeleteWorkspaceResponse {
    public String contentType;
    public DeleteWorkspaceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DeleteWorkspaceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DeleteWorkspace200ApplicationJson deleteWorkspace200ApplicationJSONObject;
    public DeleteWorkspaceResponse withDeleteWorkspace200ApplicationJsonObject(DeleteWorkspace200ApplicationJson deleteWorkspace200ApplicationJSONObject) {
        this.deleteWorkspace200ApplicationJSONObject = deleteWorkspace200ApplicationJSONObject;
        return this;
    }
}