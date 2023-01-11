package openapisdk.models.operations;



public class GetDocumentationRelationsResponse {
    public String contentType;
    public GetDocumentationRelationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetDocumentationRelationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetDocumentationRelations200ApplicationJson getDocumentationRelations200ApplicationJSONObject;
    public GetDocumentationRelationsResponse withGetDocumentationRelations200ApplicationJsonObject(GetDocumentationRelations200ApplicationJson getDocumentationRelations200ApplicationJSONObject) {
        this.getDocumentationRelations200ApplicationJSONObject = getDocumentationRelations200ApplicationJSONObject;
        return this;
    }
}