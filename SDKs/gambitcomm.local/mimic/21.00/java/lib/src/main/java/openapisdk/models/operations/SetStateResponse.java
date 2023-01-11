package openapisdk.models.operations;



public class SetStateResponse {
    public String contentType;
    public SetStateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SetStateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String setState200ApplicationJSONString;
    public SetStateResponse withSetState200ApplicationJsonString(String setState200ApplicationJSONString) {
        this.setState200ApplicationJSONString = setState200ApplicationJSONString;
        return this;
    }
}