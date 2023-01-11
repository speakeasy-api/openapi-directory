package openapisdk.models.operations;



public class GetTagsResponse {
    public String contentType;
    public GetTagsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetTagsResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public GetTagsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetTags200ApplicationJson getTags200ApplicationJSONObject;
    public GetTagsResponse withGetTags200ApplicationJsonObject(GetTags200ApplicationJson getTags200ApplicationJSONObject) {
        this.getTags200ApplicationJSONObject = getTags200ApplicationJSONObject;
        return this;
    }
}