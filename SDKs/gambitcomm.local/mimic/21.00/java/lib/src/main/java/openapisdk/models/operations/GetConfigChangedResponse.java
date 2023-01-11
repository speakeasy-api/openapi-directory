package openapisdk.models.operations;



public class GetConfigChangedResponse {
    public String contentType;
    public GetConfigChangedResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetConfigChangedResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Integer getConfigChanged200ApplicationJSONInt32Integer;
    public GetConfigChangedResponse withGetConfigChanged200ApplicationJsonInt32Integer(Integer getConfigChanged200ApplicationJSONInt32Integer) {
        this.getConfigChanged200ApplicationJSONInt32Integer = getConfigChanged200ApplicationJSONInt32Integer;
        return this;
    }
}