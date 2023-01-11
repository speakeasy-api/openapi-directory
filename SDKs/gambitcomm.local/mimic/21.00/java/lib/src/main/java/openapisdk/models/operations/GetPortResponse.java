package openapisdk.models.operations;



public class GetPortResponse {
    public String contentType;
    public GetPortResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetPortResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String getPort200ApplicationJSONString;
    public GetPortResponse withGetPort200ApplicationJsonString(String getPort200ApplicationJSONString) {
        this.getPort200ApplicationJSONString = getPort200ApplicationJSONString;
        return this;
    }
}