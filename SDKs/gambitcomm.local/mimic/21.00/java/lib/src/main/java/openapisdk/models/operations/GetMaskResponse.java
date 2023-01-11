package openapisdk.models.operations;



public class GetMaskResponse {
    public String contentType;
    public GetMaskResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetMaskResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String getMask200ApplicationJSONString;
    public GetMaskResponse withGetMask200ApplicationJsonString(String getMask200ApplicationJSONString) {
        this.getMask200ApplicationJSONString = getMask200ApplicationJSONString;
        return this;
    }
}