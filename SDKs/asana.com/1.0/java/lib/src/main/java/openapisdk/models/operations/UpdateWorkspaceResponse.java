package openapisdk.models.operations;



public class UpdateWorkspaceResponse {
    public String contentType;
    public UpdateWorkspaceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public UpdateWorkspaceResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
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
}