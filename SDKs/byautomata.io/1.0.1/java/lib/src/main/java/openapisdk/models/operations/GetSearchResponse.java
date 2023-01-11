package openapisdk.models.operations;



public class GetSearchResponse {
    public String contentType;
    public GetSearchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetSearchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetSearch200ApplicationJson getSearch200ApplicationJSONObject;
    public GetSearchResponse withGetSearch200ApplicationJsonObject(GetSearch200ApplicationJson getSearch200ApplicationJSONObject) {
        this.getSearch200ApplicationJSONObject = getSearch200ApplicationJSONObject;
        return this;
    }
}