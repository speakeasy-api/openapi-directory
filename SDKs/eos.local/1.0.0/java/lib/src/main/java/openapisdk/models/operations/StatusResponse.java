package openapisdk.models.operations;



public class StatusResponse {
    public String contentType;
    public StatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public StatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Status200ApplicationJson status200ApplicationJSONObject;
    public StatusResponse withStatus200ApplicationJsonObject(Status200ApplicationJson status200ApplicationJSONObject) {
        this.status200ApplicationJSONObject = status200ApplicationJSONObject;
        return this;
    }
}