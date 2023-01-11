package openapisdk.models.operations;



public class NewResponse {
    public String contentType;
    public NewResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public NewResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String new200ApplicationJSONString;
    public NewResponse withNew200ApplicationJsonString(String new200ApplicationJSONString) {
        this.new200ApplicationJSONString = new200ApplicationJSONString;
        return this;
    }
}