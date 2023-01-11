package openapisdk.models.operations;



public class CreateCollectionResponse {
    public String contentType;
    public CreateCollectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateCollectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public CreateCollection200ApplicationJson createCollection200ApplicationJSONObject;
    public CreateCollectionResponse withCreateCollection200ApplicationJsonObject(CreateCollection200ApplicationJson createCollection200ApplicationJSONObject) {
        this.createCollection200ApplicationJSONObject = createCollection200ApplicationJSONObject;
        return this;
    }
    public CreateCollection400ApplicationJson createCollection400ApplicationJSONObject;
    public CreateCollectionResponse withCreateCollection400ApplicationJsonObject(CreateCollection400ApplicationJson createCollection400ApplicationJSONObject) {
        this.createCollection400ApplicationJSONObject = createCollection400ApplicationJSONObject;
        return this;
    }
}