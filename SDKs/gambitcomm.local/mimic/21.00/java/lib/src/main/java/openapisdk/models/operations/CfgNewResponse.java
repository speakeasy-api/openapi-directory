package openapisdk.models.operations;



public class CfgNewResponse {
    public String contentType;
    public CfgNewResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CfgNewResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Integer> cfgNew200ApplicationJSONObject;
    public CfgNewResponse withCfgNew200ApplicationJsonObject(java.util.Map<String, Integer> cfgNew200ApplicationJSONObject) {
        this.cfgNew200ApplicationJSONObject = cfgNew200ApplicationJSONObject;
        return this;
    }
}