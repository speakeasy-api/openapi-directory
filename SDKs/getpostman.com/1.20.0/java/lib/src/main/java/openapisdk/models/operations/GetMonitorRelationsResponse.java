package openapisdk.models.operations;



public class GetMonitorRelationsResponse {
    public String contentType;
    public GetMonitorRelationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetMonitorRelationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetMonitorRelations200ApplicationJson getMonitorRelations200ApplicationJSONObject;
    public GetMonitorRelationsResponse withGetMonitorRelations200ApplicationJsonObject(GetMonitorRelations200ApplicationJson getMonitorRelations200ApplicationJSONObject) {
        this.getMonitorRelations200ApplicationJSONObject = getMonitorRelations200ApplicationJSONObject;
        return this;
    }
}