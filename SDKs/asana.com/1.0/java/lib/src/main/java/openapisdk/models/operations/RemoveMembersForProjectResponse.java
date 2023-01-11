package openapisdk.models.operations;



public class RemoveMembersForProjectResponse {
    public String contentType;
    public RemoveMembersForProjectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public RemoveMembersForProjectResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public RemoveMembersForProjectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public RemoveMembersForProject200ApplicationJson removeMembersForProject200ApplicationJSONObject;
    public RemoveMembersForProjectResponse withRemoveMembersForProject200ApplicationJsonObject(RemoveMembersForProject200ApplicationJson removeMembersForProject200ApplicationJSONObject) {
        this.removeMembersForProject200ApplicationJSONObject = removeMembersForProject200ApplicationJSONObject;
        return this;
    }
}