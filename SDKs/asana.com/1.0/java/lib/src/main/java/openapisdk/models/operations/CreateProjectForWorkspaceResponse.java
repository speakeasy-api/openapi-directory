package openapisdk.models.operations;



public class CreateProjectForWorkspaceResponse {
    public String contentType;
    public CreateProjectForWorkspaceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public CreateProjectForWorkspaceResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public CreateProjectForWorkspaceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public CreateProjectForWorkspace201ApplicationJson createProjectForWorkspace201ApplicationJSONObject;
    public CreateProjectForWorkspaceResponse withCreateProjectForWorkspace201ApplicationJsonObject(CreateProjectForWorkspace201ApplicationJson createProjectForWorkspace201ApplicationJSONObject) {
        this.createProjectForWorkspace201ApplicationJSONObject = createProjectForWorkspace201ApplicationJSONObject;
        return this;
    }
}