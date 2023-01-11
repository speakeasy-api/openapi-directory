package openapisdk.models.operations;



public class DisconnectResponse {
    public String contentType;
    public DisconnectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DisconnectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String disconnect200ApplicationJSONString;
    public DisconnectResponse withDisconnect200ApplicationJsonString(String disconnect200ApplicationJSONString) {
        this.disconnect200ApplicationJSONString = disconnect200ApplicationJSONString;
        return this;
    }
}