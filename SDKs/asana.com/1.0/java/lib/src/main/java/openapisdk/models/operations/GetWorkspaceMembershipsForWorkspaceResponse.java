package openapisdk.models.operations;



public class GetWorkspaceMembershipsForWorkspaceResponse {
    public String contentType;
    public GetWorkspaceMembershipsForWorkspaceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetWorkspaceMembershipsForWorkspaceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetWorkspaceMembershipsForWorkspace200ApplicationJson getWorkspaceMembershipsForWorkspace200ApplicationJSONObject;
    public GetWorkspaceMembershipsForWorkspaceResponse withGetWorkspaceMembershipsForWorkspace200ApplicationJsonObject(GetWorkspaceMembershipsForWorkspace200ApplicationJson getWorkspaceMembershipsForWorkspace200ApplicationJSONObject) {
        this.getWorkspaceMembershipsForWorkspace200ApplicationJSONObject = getWorkspaceMembershipsForWorkspace200ApplicationJSONObject;
        return this;
    }
}