package openapisdk.models.operations;



public class GetTagsForTaskResponse {
    public String contentType;
    public GetTagsForTaskResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetTagsForTaskResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public GetTagsForTaskResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetTagsForTask200ApplicationJson getTagsForTask200ApplicationJSONObject;
    public GetTagsForTaskResponse withGetTagsForTask200ApplicationJsonObject(GetTagsForTask200ApplicationJson getTagsForTask200ApplicationJSONObject) {
        this.getTagsForTask200ApplicationJSONObject = getTagsForTask200ApplicationJSONObject;
        return this;
    }
}