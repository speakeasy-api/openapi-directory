package openapisdk.models.operations;



public class GetServerHealthResponse {
    public String contentType;
    public GetServerHealthResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public GetServerHealth200ApplicationJson getServerHealth200ApplicationJSONObject;
    public GetServerHealthResponse withGetServerHealth200ApplicationJsonObject(GetServerHealth200ApplicationJson getServerHealth200ApplicationJSONObject) {
        this.getServerHealth200ApplicationJSONObject = getServerHealth200ApplicationJSONObject;
        return this;
    }
    public Long statusCode;
    public GetServerHealthResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}