package openapisdk.models.operations;



public class GetCustomFieldsForWorkspaceResponse {
    public String contentType;
    public GetCustomFieldsForWorkspaceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetCustomFieldsForWorkspaceResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public GetCustomFieldsForWorkspaceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetCustomFieldsForWorkspace200ApplicationJson getCustomFieldsForWorkspace200ApplicationJSONObject;
    public GetCustomFieldsForWorkspaceResponse withGetCustomFieldsForWorkspace200ApplicationJsonObject(GetCustomFieldsForWorkspace200ApplicationJson getCustomFieldsForWorkspace200ApplicationJSONObject) {
        this.getCustomFieldsForWorkspace200ApplicationJSONObject = getCustomFieldsForWorkspace200ApplicationJSONObject;
        return this;
    }
}