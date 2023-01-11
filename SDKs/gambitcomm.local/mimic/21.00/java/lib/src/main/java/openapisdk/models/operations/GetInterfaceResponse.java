package openapisdk.models.operations;



public class GetInterfaceResponse {
    public String contentType;
    public GetInterfaceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetInterfaceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String getInterface200ApplicationJSONString;
    public GetInterfaceResponse withGetInterface200ApplicationJsonString(String getInterface200ApplicationJSONString) {
        this.getInterface200ApplicationJSONString = getInterface200ApplicationJSONString;
        return this;
    }
}