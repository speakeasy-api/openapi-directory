package openapisdk.models.operations;



public class CfgSaveasResponse {
    public String contentType;
    public CfgSaveasResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CfgSaveasResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Integer> cfgSaveas200ApplicationJSONObject;
    public CfgSaveasResponse withCfgSaveas200ApplicationJsonObject(java.util.Map<String, Integer> cfgSaveas200ApplicationJSONObject) {
        this.cfgSaveas200ApplicationJSONObject = cfgSaveas200ApplicationJSONObject;
        return this;
    }
}