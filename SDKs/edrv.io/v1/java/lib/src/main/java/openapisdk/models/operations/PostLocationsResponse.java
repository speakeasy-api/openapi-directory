package openapisdk.models.operations;



public class PostLocationsResponse {
    public String contentType;
    public PostLocationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostLocationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PostLocations200ApplicationJson postLocations200ApplicationJSONObject;
    public PostLocationsResponse withPostLocations200ApplicationJsonObject(PostLocations200ApplicationJson postLocations200ApplicationJSONObject) {
        this.postLocations200ApplicationJSONObject = postLocations200ApplicationJSONObject;
        return this;
    }
}