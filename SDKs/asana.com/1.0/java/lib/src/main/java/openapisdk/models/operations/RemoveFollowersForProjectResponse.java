package openapisdk.models.operations;



public class RemoveFollowersForProjectResponse {
    public String contentType;
    public RemoveFollowersForProjectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public RemoveFollowersForProjectResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public RemoveFollowersForProjectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public RemoveFollowersForProject200ApplicationJson removeFollowersForProject200ApplicationJSONObject;
    public RemoveFollowersForProjectResponse withRemoveFollowersForProject200ApplicationJsonObject(RemoveFollowersForProject200ApplicationJson removeFollowersForProject200ApplicationJSONObject) {
        this.removeFollowersForProject200ApplicationJSONObject = removeFollowersForProject200ApplicationJSONObject;
        return this;
    }
}