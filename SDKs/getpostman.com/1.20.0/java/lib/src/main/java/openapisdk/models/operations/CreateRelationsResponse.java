package openapisdk.models.operations;



public class CreateRelationsResponse {
    public String contentType;
    public CreateRelationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateRelationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public CreateRelations200ApplicationJson createRelations200ApplicationJSONObject;
    public CreateRelationsResponse withCreateRelations200ApplicationJsonObject(CreateRelations200ApplicationJson createRelations200ApplicationJSONObject) {
        this.createRelations200ApplicationJSONObject = createRelations200ApplicationJSONObject;
        return this;
    }
}