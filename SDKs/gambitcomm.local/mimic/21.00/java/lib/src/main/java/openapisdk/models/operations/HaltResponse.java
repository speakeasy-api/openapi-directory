package openapisdk.models.operations;



public class HaltResponse {
    public String contentType;
    public HaltResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public HaltResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String halt200ApplicationJSONString;
    public HaltResponse withHalt200ApplicationJsonString(String halt200ApplicationJSONString) {
        this.halt200ApplicationJSONString = halt200ApplicationJSONString;
        return this;
    }
}