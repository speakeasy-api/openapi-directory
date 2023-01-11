package openapisdk.models.operations;



public class GetStoryResponse {
    public String contentType;
    public GetStoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetStoryResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public GetStoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetStory200ApplicationJson getStory200ApplicationJSONObject;
    public GetStoryResponse withGetStory200ApplicationJsonObject(GetStory200ApplicationJson getStory200ApplicationJSONObject) {
        this.getStory200ApplicationJSONObject = getStory200ApplicationJSONObject;
        return this;
    }
}