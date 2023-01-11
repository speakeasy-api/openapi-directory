package openapisdk.models.operations;



public class GetUsersForWorkspaceResponse {
    public String contentType;
    public GetUsersForWorkspaceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetUsersForWorkspaceResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public GetUsersForWorkspaceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetUsersForWorkspace200ApplicationJson getUsersForWorkspace200ApplicationJSONObject;
    public GetUsersForWorkspaceResponse withGetUsersForWorkspace200ApplicationJsonObject(GetUsersForWorkspace200ApplicationJson getUsersForWorkspace200ApplicationJSONObject) {
        this.getUsersForWorkspace200ApplicationJSONObject = getUsersForWorkspace200ApplicationJSONObject;
        return this;
    }
}