package openapisdk.models.operations;



public class GetWorkspaceResponse {
    public String contentType;
    public GetWorkspaceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetWorkspaceResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public GetWorkspaceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetWorkspace200ApplicationJson getWorkspace200ApplicationJSONObject;
    public GetWorkspaceResponse withGetWorkspace200ApplicationJsonObject(GetWorkspace200ApplicationJson getWorkspace200ApplicationJSONObject) {
        this.getWorkspace200ApplicationJSONObject = getWorkspace200ApplicationJSONObject;
        return this;
    }
}