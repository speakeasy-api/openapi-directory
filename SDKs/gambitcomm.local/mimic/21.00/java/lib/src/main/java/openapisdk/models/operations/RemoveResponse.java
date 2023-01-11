package openapisdk.models.operations;



public class RemoveResponse {
    public String contentType;
    public RemoveResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public RemoveResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String remove200ApplicationJSONString;
    public RemoveResponse withRemove200ApplicationJsonString(String remove200ApplicationJSONString) {
        this.remove200ApplicationJSONString = remove200ApplicationJSONString;
        return this;
    }
}