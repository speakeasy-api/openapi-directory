package openapisdk.models.operations;



public class ConnectResponse {
    public String contentType;
    public ConnectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ConnectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String connect200ApplicationJSONString;
    public ConnectResponse withConnect200ApplicationJsonString(String connect200ApplicationJSONString) {
        this.connect200ApplicationJSONString = connect200ApplicationJSONString;
        return this;
    }
}