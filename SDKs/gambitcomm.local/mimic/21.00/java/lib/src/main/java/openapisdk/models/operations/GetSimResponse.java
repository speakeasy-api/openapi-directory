package openapisdk.models.operations;



public class GetSimResponse {
    public String contentType;
    public GetSimResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetSimResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String getSim200ApplicationJSONString;
    public GetSimResponse withGetSim200ApplicationJsonString(String getSim200ApplicationJSONString) {
        this.getSim200ApplicationJSONString = getSim200ApplicationJSONString;
        return this;
    }
}