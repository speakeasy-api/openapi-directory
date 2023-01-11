package openapisdk.models.operations;



public class GetCfgFileChangedResponse {
    public String contentType;
    public GetCfgFileChangedResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCfgFileChangedResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Integer> getCfgFileChanged200ApplicationJSONObject;
    public GetCfgFileChangedResponse withGetCfgFileChanged200ApplicationJsonObject(java.util.Map<String, Integer> getCfgFileChanged200ApplicationJSONObject) {
        this.getCfgFileChanged200ApplicationJSONObject = getCfgFileChanged200ApplicationJSONObject;
        return this;
    }
}