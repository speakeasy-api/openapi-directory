package openapisdk.models.operations;



public class CreateWorkspaceResponse {
    public String contentType;
    public CreateWorkspaceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateWorkspaceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public CreateWorkspace200ApplicationJson createWorkspace200ApplicationJSONObject;
    public CreateWorkspaceResponse withCreateWorkspace200ApplicationJsonObject(CreateWorkspace200ApplicationJson createWorkspace200ApplicationJSONObject) {
        this.createWorkspace200ApplicationJSONObject = createWorkspace200ApplicationJSONObject;
        return this;
    }
    public CreateWorkspace400ApplicationJson createWorkspace400ApplicationJSONObject;
    public CreateWorkspaceResponse withCreateWorkspace400ApplicationJsonObject(CreateWorkspace400ApplicationJson createWorkspace400ApplicationJSONObject) {
        this.createWorkspace400ApplicationJSONObject = createWorkspace400ApplicationJSONObject;
        return this;
    }
}