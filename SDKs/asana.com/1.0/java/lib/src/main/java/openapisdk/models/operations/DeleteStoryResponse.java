package openapisdk.models.operations;



public class DeleteStoryResponse {
    public String contentType;
    public DeleteStoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public DeleteStoryResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public DeleteStoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DeleteStory200ApplicationJson deleteStory200ApplicationJSONObject;
    public DeleteStoryResponse withDeleteStory200ApplicationJsonObject(DeleteStory200ApplicationJson deleteStory200ApplicationJSONObject) {
        this.deleteStory200ApplicationJSONObject = deleteStory200ApplicationJSONObject;
        return this;
    }
}