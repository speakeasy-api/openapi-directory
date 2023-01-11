package openapisdk.models.operations;



public class GetIntegrationTestRelationsResponse {
    public String contentType;
    public GetIntegrationTestRelationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetIntegrationTestRelationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetIntegrationTestRelations200ApplicationJson getIntegrationTestRelations200ApplicationJSONObject;
    public GetIntegrationTestRelationsResponse withGetIntegrationTestRelations200ApplicationJsonObject(GetIntegrationTestRelations200ApplicationJson getIntegrationTestRelations200ApplicationJSONObject) {
        this.getIntegrationTestRelations200ApplicationJSONObject = getIntegrationTestRelations200ApplicationJSONObject;
        return this;
    }
}