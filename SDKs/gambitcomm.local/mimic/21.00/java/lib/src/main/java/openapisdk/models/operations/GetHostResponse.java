package openapisdk.models.operations;



public class GetHostResponse {
    public String contentType;
    public GetHostResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetHostResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String getHost200ApplicationJSONString;
    public GetHostResponse withGetHost200ApplicationJsonString(String getHost200ApplicationJSONString) {
        this.getHost200ApplicationJSONString = getHost200ApplicationJSONString;
        return this;
    }
}