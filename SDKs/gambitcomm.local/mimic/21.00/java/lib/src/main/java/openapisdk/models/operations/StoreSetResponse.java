package openapisdk.models.operations;



public class StoreSetResponse {
    public String contentType;
    public StoreSetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public StoreSetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String storeSet200ApplicationJSONString;
    public StoreSetResponse withStoreSet200ApplicationJsonString(String storeSet200ApplicationJSONString) {
        this.storeSet200ApplicationJSONString = storeSet200ApplicationJSONString;
        return this;
    }
}