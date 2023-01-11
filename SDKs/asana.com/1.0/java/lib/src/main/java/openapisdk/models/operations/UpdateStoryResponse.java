package openapisdk.models.operations;



public class UpdateStoryResponse {
    public String contentType;
    public UpdateStoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public UpdateStoryResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public UpdateStoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public UpdateStory200ApplicationJson updateStory200ApplicationJSONObject;
    public UpdateStoryResponse withUpdateStory200ApplicationJsonObject(UpdateStory200ApplicationJson updateStory200ApplicationJSONObject) {
        this.updateStory200ApplicationJSONObject = updateStory200ApplicationJSONObject;
        return this;
    }
}