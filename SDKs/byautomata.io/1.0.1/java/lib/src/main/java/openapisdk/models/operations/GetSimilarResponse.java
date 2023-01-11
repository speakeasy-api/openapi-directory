package openapisdk.models.operations;



public class GetSimilarResponse {
    public String contentType;
    public GetSimilarResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetSimilarResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetSimilar200ApplicationJson getSimilar200ApplicationJSONObject;
    public GetSimilarResponse withGetSimilar200ApplicationJsonObject(GetSimilar200ApplicationJson getSimilar200ApplicationJSONObject) {
        this.getSimilar200ApplicationJSONObject = getSimilar200ApplicationJSONObject;
        return this;
    }
}