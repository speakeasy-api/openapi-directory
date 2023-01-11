package openapisdk.models.operations;



public class GetStoriesForTaskResponse {
    public String contentType;
    public GetStoriesForTaskResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetStoriesForTaskResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public GetStoriesForTaskResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetStoriesForTask200ApplicationJson getStoriesForTask200ApplicationJSONObject;
    public GetStoriesForTaskResponse withGetStoriesForTask200ApplicationJsonObject(GetStoriesForTask200ApplicationJson getStoriesForTask200ApplicationJSONObject) {
        this.getStoriesForTask200ApplicationJSONObject = getStoriesForTask200ApplicationJSONObject;
        return this;
    }
}