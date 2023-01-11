package openapisdk.models.operations;



public class DeleteCollectionResponse {
    public String contentType;
    public DeleteCollectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DeleteCollectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DeleteCollection200ApplicationJson deleteCollection200ApplicationJSONObject;
    public DeleteCollectionResponse withDeleteCollection200ApplicationJsonObject(DeleteCollection200ApplicationJson deleteCollection200ApplicationJSONObject) {
        this.deleteCollection200ApplicationJSONObject = deleteCollection200ApplicationJSONObject;
        return this;
    }
    public DeleteCollection404ApplicationJson deleteCollection404ApplicationJSONObject;
    public DeleteCollectionResponse withDeleteCollection404ApplicationJsonObject(DeleteCollection404ApplicationJson deleteCollection404ApplicationJSONObject) {
        this.deleteCollection404ApplicationJSONObject = deleteCollection404ApplicationJSONObject;
        return this;
    }
}