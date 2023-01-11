package openapisdk.models.operations;



public class GetContentproSearchResponse {
    public String contentType;
    public GetContentproSearchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetContentproSearchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetContentproSearch200ApplicationJson getContentproSearch200ApplicationJSONObject;
    public GetContentproSearchResponse withGetContentproSearch200ApplicationJsonObject(GetContentproSearch200ApplicationJson getContentproSearch200ApplicationJSONObject) {
        this.getContentproSearch200ApplicationJSONObject = getContentproSearch200ApplicationJSONObject;
        return this;
    }
}