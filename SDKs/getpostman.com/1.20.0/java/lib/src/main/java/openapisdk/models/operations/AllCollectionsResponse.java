package openapisdk.models.operations;



public class AllCollectionsResponse {
    public String contentType;
    public AllCollectionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AllCollectionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public AllCollections200ApplicationJson allCollections200ApplicationJSONObject;
    public AllCollectionsResponse withAllCollections200ApplicationJsonObject(AllCollections200ApplicationJson allCollections200ApplicationJSONObject) {
        this.allCollections200ApplicationJSONObject = allCollections200ApplicationJSONObject;
        return this;
    }
}