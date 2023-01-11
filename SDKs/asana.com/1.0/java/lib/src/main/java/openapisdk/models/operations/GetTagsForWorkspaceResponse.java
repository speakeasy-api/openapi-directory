package openapisdk.models.operations;



public class GetTagsForWorkspaceResponse {
    public String contentType;
    public GetTagsForWorkspaceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetTagsForWorkspaceResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public GetTagsForWorkspaceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetTagsForWorkspace200ApplicationJson getTagsForWorkspace200ApplicationJSONObject;
    public GetTagsForWorkspaceResponse withGetTagsForWorkspace200ApplicationJsonObject(GetTagsForWorkspace200ApplicationJson getTagsForWorkspace200ApplicationJSONObject) {
        this.getTagsForWorkspace200ApplicationJSONObject = getTagsForWorkspace200ApplicationJSONObject;
        return this;
    }
}