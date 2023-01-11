package openapisdk.models.operations;



public class AllWorkspacesResponse {
    public String contentType;
    public AllWorkspacesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AllWorkspacesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public AllWorkspaces200ApplicationJson allWorkspaces200ApplicationJSONObject;
    public AllWorkspacesResponse withAllWorkspaces200ApplicationJsonObject(AllWorkspaces200ApplicationJson allWorkspaces200ApplicationJSONObject) {
        this.allWorkspaces200ApplicationJSONObject = allWorkspaces200ApplicationJSONObject;
        return this;
    }
}