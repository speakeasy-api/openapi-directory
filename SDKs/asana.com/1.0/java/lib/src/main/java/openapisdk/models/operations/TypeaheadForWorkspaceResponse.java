package openapisdk.models.operations;



public class TypeaheadForWorkspaceResponse {
    public String contentType;
    public TypeaheadForWorkspaceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public TypeaheadForWorkspaceResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public TypeaheadForWorkspaceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public TypeaheadForWorkspace200ApplicationJson typeaheadForWorkspace200ApplicationJSONObject;
    public TypeaheadForWorkspaceResponse withTypeaheadForWorkspace200ApplicationJsonObject(TypeaheadForWorkspace200ApplicationJson typeaheadForWorkspace200ApplicationJSONObject) {
        this.typeaheadForWorkspace200ApplicationJSONObject = typeaheadForWorkspace200ApplicationJSONObject;
        return this;
    }
}