package openapisdk.models.operations;



public class StoreExistsResponse {
    public String contentType;
    public StoreExistsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public StoreExistsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String storeExists200ApplicationJSONString;
    public StoreExistsResponse withStoreExists200ApplicationJsonString(String storeExists200ApplicationJSONString) {
        this.storeExists200ApplicationJSONString = storeExists200ApplicationJSONString;
        return this;
    }
}