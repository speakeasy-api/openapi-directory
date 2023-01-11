package openapisdk.models.operations;



public class StopResponse {
    public String contentType;
    public StopResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public StopResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String stop200ApplicationJSONString;
    public StopResponse withStop200ApplicationJsonString(String stop200ApplicationJSONString) {
        this.stop200ApplicationJSONString = stop200ApplicationJSONString;
        return this;
    }
}