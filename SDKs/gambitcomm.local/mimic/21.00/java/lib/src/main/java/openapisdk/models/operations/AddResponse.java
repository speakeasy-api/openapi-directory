package openapisdk.models.operations;



public class AddResponse {
    public String contentType;
    public AddResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AddResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String add200ApplicationJSONString;
    public AddResponse withAdd200ApplicationJsonString(String add200ApplicationJSONString) {
        this.add200ApplicationJSONString = add200ApplicationJSONString;
        return this;
    }
}