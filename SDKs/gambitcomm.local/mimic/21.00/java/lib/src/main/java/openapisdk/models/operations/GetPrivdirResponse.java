package openapisdk.models.operations;



public class GetPrivdirResponse {
    public String contentType;
    public GetPrivdirResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetPrivdirResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String getPrivdir200ApplicationJSONString;
    public GetPrivdirResponse withGetPrivdir200ApplicationJsonString(String getPrivdir200ApplicationJSONString) {
        this.getPrivdir200ApplicationJSONString = getPrivdir200ApplicationJSONString;
        return this;
    }
}