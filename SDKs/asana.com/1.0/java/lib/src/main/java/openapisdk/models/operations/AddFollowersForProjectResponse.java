package openapisdk.models.operations;



public class AddFollowersForProjectResponse {
    public String contentType;
    public AddFollowersForProjectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public AddFollowersForProjectResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public AddFollowersForProjectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public AddFollowersForProject200ApplicationJson addFollowersForProject200ApplicationJSONObject;
    public AddFollowersForProjectResponse withAddFollowersForProject200ApplicationJsonObject(AddFollowersForProject200ApplicationJson addFollowersForProject200ApplicationJSONObject) {
        this.addFollowersForProject200ApplicationJSONObject = addFollowersForProject200ApplicationJSONObject;
        return this;
    }
}