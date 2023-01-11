package openapisdk.models.operations;



public class AddFollowersForTaskResponse {
    public String contentType;
    public AddFollowersForTaskResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public AddFollowersForTaskResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public AddFollowersForTaskResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public AddFollowersForTask200ApplicationJson addFollowersForTask200ApplicationJSONObject;
    public AddFollowersForTaskResponse withAddFollowersForTask200ApplicationJsonObject(AddFollowersForTask200ApplicationJson addFollowersForTask200ApplicationJSONObject) {
        this.addFollowersForTask200ApplicationJSONObject = addFollowersForTask200ApplicationJSONObject;
        return this;
    }
}