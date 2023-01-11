package openapisdk.models.operations;



public class GetEnvironmentRelationsResponse {
    public String contentType;
    public GetEnvironmentRelationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetEnvironmentRelationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetEnvironmentRelations200ApplicationJson getEnvironmentRelations200ApplicationJSONObject;
    public GetEnvironmentRelationsResponse withGetEnvironmentRelations200ApplicationJsonObject(GetEnvironmentRelations200ApplicationJson getEnvironmentRelations200ApplicationJSONObject) {
        this.getEnvironmentRelations200ApplicationJSONObject = getEnvironmentRelations200ApplicationJSONObject;
        return this;
    }
}