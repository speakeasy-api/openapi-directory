package openapisdk.models.operations;



public class RemoveUserForWorkspaceResponse {
    public String contentType;
    public RemoveUserForWorkspaceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public RemoveUserForWorkspaceResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public RemoveUserForWorkspaceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public RemoveUserForWorkspace204ApplicationJson removeUserForWorkspace204ApplicationJSONObject;
    public RemoveUserForWorkspaceResponse withRemoveUserForWorkspace204ApplicationJsonObject(RemoveUserForWorkspace204ApplicationJson removeUserForWorkspace204ApplicationJSONObject) {
        this.removeUserForWorkspace204ApplicationJSONObject = removeUserForWorkspace204ApplicationJSONObject;
        return this;
    }
}