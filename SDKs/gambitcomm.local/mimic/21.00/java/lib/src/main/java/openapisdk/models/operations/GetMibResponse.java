package openapisdk.models.operations;



public class GetMibResponse {
    public String contentType;
    public GetMibResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetMibResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String getMib200ApplicationJSONString;
    public GetMibResponse withGetMib200ApplicationJsonString(String getMib200ApplicationJSONString) {
        this.getMib200ApplicationJSONString = getMib200ApplicationJSONString;
        return this;
    }
}