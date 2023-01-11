package openapisdk.models.operations;



public class PostDriversResponse {
    public String contentType;
    public PostDriversResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDriversResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PostDrivers200ApplicationJson postDrivers200ApplicationJSONObject;
    public PostDriversResponse withPostDrivers200ApplicationJsonObject(PostDrivers200ApplicationJson postDrivers200ApplicationJSONObject) {
        this.postDrivers200ApplicationJSONObject = postDrivers200ApplicationJSONObject;
        return this;
    }
}