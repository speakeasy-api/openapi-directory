package openapisdk.models.operations;



public class StoreSaveResponse {
    public String contentType;
    public StoreSaveResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public StoreSaveResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Integer> storeSave200ApplicationJSONObject;
    public StoreSaveResponse withStoreSave200ApplicationJsonObject(java.util.Map<String, Integer> storeSave200ApplicationJSONObject) {
        this.storeSave200ApplicationJSONObject = storeSave200ApplicationJSONObject;
        return this;
    }
}