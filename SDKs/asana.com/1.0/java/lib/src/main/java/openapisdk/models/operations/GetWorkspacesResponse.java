package openapisdk.models.operations;



public class GetWorkspacesResponse {
    public String contentType;
    public GetWorkspacesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetWorkspacesResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public GetWorkspacesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetWorkspaces200ApplicationJson getWorkspaces200ApplicationJSONObject;
    public GetWorkspacesResponse withGetWorkspaces200ApplicationJsonObject(GetWorkspaces200ApplicationJson getWorkspaces200ApplicationJSONObject) {
        this.getWorkspaces200ApplicationJSONObject = getWorkspaces200ApplicationJSONObject;
        return this;
    }
}