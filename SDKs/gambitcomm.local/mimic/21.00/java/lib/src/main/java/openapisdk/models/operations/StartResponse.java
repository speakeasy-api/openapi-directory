package openapisdk.models.operations;



public class StartResponse {
    public String contentType;
    public StartResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public StartResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String start200ApplicationJSONString;
    public StartResponse withStart200ApplicationJsonString(String start200ApplicationJSONString) {
        this.start200ApplicationJSONString = start200ApplicationJSONString;
        return this;
    }
}