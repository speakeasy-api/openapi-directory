package openapisdk.models.operations;



public class GetProjectsForWorkspaceResponse {
    public String contentType;
    public GetProjectsForWorkspaceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetProjectsForWorkspaceResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public GetProjectsForWorkspaceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetProjectsForWorkspace200ApplicationJson getProjectsForWorkspace200ApplicationJSONObject;
    public GetProjectsForWorkspaceResponse withGetProjectsForWorkspace200ApplicationJsonObject(GetProjectsForWorkspace200ApplicationJson getProjectsForWorkspace200ApplicationJSONObject) {
        this.getProjectsForWorkspace200ApplicationJSONObject = getProjectsForWorkspace200ApplicationJSONObject;
        return this;
    }
}