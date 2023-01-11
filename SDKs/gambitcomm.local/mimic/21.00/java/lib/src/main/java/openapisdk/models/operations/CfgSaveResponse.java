package openapisdk.models.operations;



public class CfgSaveResponse {
    public String contentType;
    public CfgSaveResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CfgSaveResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Integer> cfgSave200ApplicationJSONObject;
    public CfgSaveResponse withCfgSave200ApplicationJsonObject(java.util.Map<String, Integer> cfgSave200ApplicationJSONObject) {
        this.cfgSave200ApplicationJSONObject = cfgSave200ApplicationJSONObject;
        return this;
    }
}