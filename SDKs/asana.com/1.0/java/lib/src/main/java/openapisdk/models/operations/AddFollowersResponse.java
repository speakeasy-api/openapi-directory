package openapisdk.models.operations;



public class AddFollowersResponse {
    public String contentType;
    public AddFollowersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public AddFollowersResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public AddFollowersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public AddFollowers201ApplicationJson addFollowers201ApplicationJSONObject;
    public AddFollowersResponse withAddFollowers201ApplicationJsonObject(AddFollowers201ApplicationJson addFollowers201ApplicationJSONObject) {
        this.addFollowers201ApplicationJSONObject = addFollowers201ApplicationJSONObject;
        return this;
    }
}