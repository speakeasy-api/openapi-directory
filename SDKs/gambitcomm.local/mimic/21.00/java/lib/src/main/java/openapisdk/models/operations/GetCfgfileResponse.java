package openapisdk.models.operations;



public class GetCfgfileResponse {
    public String contentType;
    public GetCfgfileResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCfgfileResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Integer> getCfgfile200ApplicationJSONObject;
    public GetCfgfileResponse withGetCfgfile200ApplicationJsonObject(java.util.Map<String, Integer> getCfgfile200ApplicationJSONObject) {
        this.getCfgfile200ApplicationJSONObject = getCfgfile200ApplicationJSONObject;
        return this;
    }
}