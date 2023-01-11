package openapisdk.models.operations;



public class AddUserForWorkspaceResponse {
    public String contentType;
    public AddUserForWorkspaceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public AddUserForWorkspaceResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public AddUserForWorkspaceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public AddUserForWorkspace200ApplicationJson addUserForWorkspace200ApplicationJSONObject;
    public AddUserForWorkspaceResponse withAddUserForWorkspace200ApplicationJsonObject(AddUserForWorkspace200ApplicationJson addUserForWorkspace200ApplicationJSONObject) {
        this.addUserForWorkspace200ApplicationJSONObject = addUserForWorkspace200ApplicationJSONObject;
        return this;
    }
}