package openapisdk.models.operations;



public class SaveResponse {
    public String contentType;
    public SaveResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SaveResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String save200ApplicationJSONString;
    public SaveResponse withSave200ApplicationJsonString(String save200ApplicationJSONString) {
        this.save200ApplicationJSONString = save200ApplicationJSONString;
        return this;
    }
}