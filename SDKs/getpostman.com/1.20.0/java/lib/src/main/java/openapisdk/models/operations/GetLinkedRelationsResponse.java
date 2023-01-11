package openapisdk.models.operations;



public class GetLinkedRelationsResponse {
    public String contentType;
    public GetLinkedRelationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetLinkedRelationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetLinkedRelations200ApplicationJson getLinkedRelations200ApplicationJSONObject;
    public GetLinkedRelationsResponse withGetLinkedRelations200ApplicationJsonObject(GetLinkedRelations200ApplicationJson getLinkedRelations200ApplicationJSONObject) {
        this.getLinkedRelations200ApplicationJSONObject = getLinkedRelations200ApplicationJSONObject;
        return this;
    }
}