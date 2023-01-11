package openapisdk.models.operations;



public class GetVersionResponse {
    public String contentType;
    public GetVersionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetVersionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String getVersion200ApplicationJSONString;
    public GetVersionResponse withGetVersion200ApplicationJsonString(String getVersion200ApplicationJSONString) {
        this.getVersion200ApplicationJSONString = getVersion200ApplicationJSONString;
        return this;
    }
}