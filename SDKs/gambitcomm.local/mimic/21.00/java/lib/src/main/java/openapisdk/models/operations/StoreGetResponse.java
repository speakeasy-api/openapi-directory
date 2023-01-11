package openapisdk.models.operations;



public class StoreGetResponse {
    public String contentType;
    public StoreGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public StoreGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String storeGet200ApplicationJSONString;
    public StoreGetResponse withStoreGet200ApplicationJsonString(String storeGet200ApplicationJSONString) {
        this.storeGet200ApplicationJSONString = storeGet200ApplicationJSONString;
        return this;
    }
}