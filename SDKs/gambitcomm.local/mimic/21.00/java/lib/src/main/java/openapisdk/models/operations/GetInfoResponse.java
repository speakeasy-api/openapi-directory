package openapisdk.models.operations;



public class GetInfoResponse {
    public String contentType;
    public GetInfoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetInfoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String getInfo200ApplicationJSONString;
    public GetInfoResponse withGetInfo200ApplicationJsonString(String getInfo200ApplicationJSONString) {
        this.getInfo200ApplicationJSONString = getInfo200ApplicationJSONString;
        return this;
    }
}