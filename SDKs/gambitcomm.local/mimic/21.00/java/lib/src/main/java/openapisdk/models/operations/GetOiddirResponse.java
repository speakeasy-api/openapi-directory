package openapisdk.models.operations;



public class GetOiddirResponse {
    public String contentType;
    public GetOiddirResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetOiddirResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String getOiddir200ApplicationJSONString;
    public GetOiddirResponse withGetOiddir200ApplicationJsonString(String getOiddir200ApplicationJSONString) {
        this.getOiddir200ApplicationJSONString = getOiddir200ApplicationJSONString;
        return this;
    }
}