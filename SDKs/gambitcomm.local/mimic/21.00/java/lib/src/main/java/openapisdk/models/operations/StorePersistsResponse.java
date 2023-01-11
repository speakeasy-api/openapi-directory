package openapisdk.models.operations;



public class StorePersistsResponse {
    public String contentType;
    public StorePersistsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public StorePersistsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String storePersists200ApplicationJSONString;
    public StorePersistsResponse withStorePersists200ApplicationJsonString(String storePersists200ApplicationJSONString) {
        this.storePersists200ApplicationJSONString = storePersists200ApplicationJSONString;
        return this;
    }
}