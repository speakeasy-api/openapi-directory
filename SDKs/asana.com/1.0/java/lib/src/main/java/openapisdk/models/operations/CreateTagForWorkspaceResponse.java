package openapisdk.models.operations;



public class CreateTagForWorkspaceResponse {
    public String contentType;
    public CreateTagForWorkspaceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public CreateTagForWorkspaceResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public CreateTagForWorkspaceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public CreateTagForWorkspace201ApplicationJson createTagForWorkspace201ApplicationJSONObject;
    public CreateTagForWorkspaceResponse withCreateTagForWorkspace201ApplicationJsonObject(CreateTagForWorkspace201ApplicationJson createTagForWorkspace201ApplicationJSONObject) {
        this.createTagForWorkspace201ApplicationJSONObject = createTagForWorkspace201ApplicationJSONObject;
        return this;
    }
}