package openapisdk.models.operations;



public class MsetValueResponse {
    public String contentType;
    public MsetValueResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public MsetValueResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String msetValue200ApplicationJSONString;
    public MsetValueResponse withMsetValue200ApplicationJsonString(String msetValue200ApplicationJSONString) {
        this.msetValue200ApplicationJSONString = msetValue200ApplicationJSONString;
        return this;
    }
}