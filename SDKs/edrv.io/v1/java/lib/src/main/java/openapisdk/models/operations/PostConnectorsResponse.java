package openapisdk.models.operations;



public class PostConnectorsResponse {
    public String contentType;
    public PostConnectorsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostConnectorsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PostConnectors200ApplicationJson postConnectors200ApplicationJSONObject;
    public PostConnectorsResponse withPostConnectors200ApplicationJsonObject(PostConnectors200ApplicationJson postConnectors200ApplicationJSONObject) {
        this.postConnectors200ApplicationJSONObject = postConnectors200ApplicationJSONObject;
        return this;
    }
}