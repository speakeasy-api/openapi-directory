package openapisdk.models.operations;



public class AllMocksResponse {
    public String contentType;
    public AllMocksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AllMocksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public AllMocks200ApplicationJson allMocks200ApplicationJSONObject;
    public AllMocksResponse withAllMocks200ApplicationJsonObject(AllMocks200ApplicationJson allMocks200ApplicationJSONObject) {
        this.allMocks200ApplicationJSONObject = allMocks200ApplicationJSONObject;
        return this;
    }
}