package openapisdk.models.operations;



public class ReloadResponse {
    public String contentType;
    public ReloadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReloadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String reload200ApplicationJSONString;
    public ReloadResponse withReload200ApplicationJsonString(String reload200ApplicationJSONString) {
        this.reload200ApplicationJSONString = reload200ApplicationJSONString;
        return this;
    }
}