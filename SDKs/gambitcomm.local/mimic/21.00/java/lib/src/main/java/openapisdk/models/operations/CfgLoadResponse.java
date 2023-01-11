package openapisdk.models.operations;



public class CfgLoadResponse {
    public String contentType;
    public CfgLoadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CfgLoadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Integer> cfgLoad200ApplicationJSONObject;
    public CfgLoadResponse withCfgLoad200ApplicationJsonObject(java.util.Map<String, Integer> cfgLoad200ApplicationJSONObject) {
        this.cfgLoad200ApplicationJSONObject = cfgLoad200ApplicationJSONObject;
        return this;
    }
}