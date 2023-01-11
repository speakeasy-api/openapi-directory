package openapisdk.models.operations;



public class UpdateCollectionResponse {
    public String contentType;
    public UpdateCollectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateCollectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public UpdateCollection200ApplicationJson updateCollection200ApplicationJSONObject;
    public UpdateCollectionResponse withUpdateCollection200ApplicationJsonObject(UpdateCollection200ApplicationJson updateCollection200ApplicationJSONObject) {
        this.updateCollection200ApplicationJSONObject = updateCollection200ApplicationJSONObject;
        return this;
    }
    public UpdateCollection400ApplicationJson updateCollection400ApplicationJSONObject;
    public UpdateCollectionResponse withUpdateCollection400ApplicationJsonObject(UpdateCollection400ApplicationJson updateCollection400ApplicationJSONObject) {
        this.updateCollection400ApplicationJSONObject = updateCollection400ApplicationJSONObject;
        return this;
    }
    public UpdateCollection403ApplicationJson updateCollection403ApplicationJSONObject;
    public UpdateCollectionResponse withUpdateCollection403ApplicationJsonObject(UpdateCollection403ApplicationJson updateCollection403ApplicationJSONObject) {
        this.updateCollection403ApplicationJSONObject = updateCollection403ApplicationJSONObject;
        return this;
    }
    public UpdateCollection404ApplicationJson updateCollection404ApplicationJSONObject;
    public UpdateCollectionResponse withUpdateCollection404ApplicationJsonObject(UpdateCollection404ApplicationJson updateCollection404ApplicationJSONObject) {
        this.updateCollection404ApplicationJSONObject = updateCollection404ApplicationJSONObject;
        return this;
    }
}