package openapisdk.models.operations;



public class SearchTasksForWorkspaceResponse {
    public String contentType;
    public SearchTasksForWorkspaceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public SearchTasksForWorkspaceResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public SearchTasksForWorkspaceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public SearchTasksForWorkspace200ApplicationJson searchTasksForWorkspace200ApplicationJSONObject;
    public SearchTasksForWorkspaceResponse withSearchTasksForWorkspace200ApplicationJsonObject(SearchTasksForWorkspace200ApplicationJson searchTasksForWorkspace200ApplicationJSONObject) {
        this.searchTasksForWorkspace200ApplicationJSONObject = searchTasksForWorkspace200ApplicationJSONObject;
        return this;
    }
}