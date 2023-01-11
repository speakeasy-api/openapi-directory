package openapisdk.models.operations;



public class StoreListResponse {
    public String contentType;
    public StoreListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public StoreListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String[] storeList200ApplicationJSONStrings;
    public StoreListResponse withStoreList200ApplicationJsonStrings(String[] storeList200ApplicationJSONStrings) {
        this.storeList200ApplicationJSONStrings = storeList200ApplicationJSONStrings;
        return this;
    }
}