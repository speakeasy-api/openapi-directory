package openapisdk.models.operations;



public class ConnectionsResponse {
    public String contentType;
    public ConnectionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ConnectionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Connections200ApplicationJson[] connections200ApplicationJSONObjects;
    public ConnectionsResponse withConnections200ApplicationJsonObjects(Connections200ApplicationJson[] connections200ApplicationJSONObjects) {
        this.connections200ApplicationJSONObjects = connections200ApplicationJSONObjects;
        return this;
    }
}