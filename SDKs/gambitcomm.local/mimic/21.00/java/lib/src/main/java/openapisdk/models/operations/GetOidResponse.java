package openapisdk.models.operations;



public class GetOidResponse {
    public String contentType;
    public GetOidResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetOidResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String getOid200ApplicationJSONString;
    public GetOidResponse withGetOid200ApplicationJsonString(String getOid200ApplicationJSONString) {
        this.getOid200ApplicationJSONString = getOid200ApplicationJSONString;
        return this;
    }
}