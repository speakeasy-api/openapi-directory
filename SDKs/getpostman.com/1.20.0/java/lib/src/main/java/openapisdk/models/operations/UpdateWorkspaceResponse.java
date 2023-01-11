package openapisdk.models.operations;



public class UpdateWorkspaceResponse {
    public String contentType;
    public UpdateWorkspaceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateWorkspaceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public UpdateWorkspace200ApplicationJson updateWorkspace200ApplicationJSONObject;
    public UpdateWorkspaceResponse withUpdateWorkspace200ApplicationJsonObject(UpdateWorkspace200ApplicationJson updateWorkspace200ApplicationJSONObject) {
        this.updateWorkspace200ApplicationJSONObject = updateWorkspace200ApplicationJSONObject;
        return this;
    }
    public UpdateWorkspace403ApplicationJson updateWorkspace403ApplicationJSONObject;
    public UpdateWorkspaceResponse withUpdateWorkspace403ApplicationJsonObject(UpdateWorkspace403ApplicationJson updateWorkspace403ApplicationJSONObject) {
        this.updateWorkspace403ApplicationJSONObject = updateWorkspace403ApplicationJSONObject;
        return this;
    }
    public UpdateWorkspace404ApplicationJson updateWorkspace404ApplicationJSONObject;
    public UpdateWorkspaceResponse withUpdateWorkspace404ApplicationJsonObject(UpdateWorkspace404ApplicationJson updateWorkspace404ApplicationJSONObject) {
        this.updateWorkspace404ApplicationJSONObject = updateWorkspace404ApplicationJSONObject;
        return this;
    }
}