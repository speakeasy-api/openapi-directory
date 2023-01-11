package openapisdk.models.operations;



public class RemoveFollowersResponse {
    public String contentType;
    public RemoveFollowersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public RemoveFollowersResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public RemoveFollowersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public RemoveFollowers201ApplicationJson removeFollowers201ApplicationJSONObject;
    public RemoveFollowersResponse withRemoveFollowers201ApplicationJsonObject(RemoveFollowers201ApplicationJson removeFollowers201ApplicationJSONObject) {
        this.removeFollowers201ApplicationJSONObject = removeFollowers201ApplicationJSONObject;
        return this;
    }
}