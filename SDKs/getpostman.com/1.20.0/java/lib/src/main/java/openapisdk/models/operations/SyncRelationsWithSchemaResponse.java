package openapisdk.models.operations;



public class SyncRelationsWithSchemaResponse {
    public String contentType;
    public SyncRelationsWithSchemaResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SyncRelationsWithSchemaResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public SyncRelationsWithSchema200ApplicationJson syncRelationsWithSchema200ApplicationJSONObject;
    public SyncRelationsWithSchemaResponse withSyncRelationsWithSchema200ApplicationJsonObject(SyncRelationsWithSchema200ApplicationJson syncRelationsWithSchema200ApplicationJSONObject) {
        this.syncRelationsWithSchema200ApplicationJSONObject = syncRelationsWithSchema200ApplicationJSONObject;
        return this;
    }
    public SyncRelationsWithSchema400ApplicationJson syncRelationsWithSchema400ApplicationJSONObject;
    public SyncRelationsWithSchemaResponse withSyncRelationsWithSchema400ApplicationJsonObject(SyncRelationsWithSchema400ApplicationJson syncRelationsWithSchema400ApplicationJSONObject) {
        this.syncRelationsWithSchema400ApplicationJSONObject = syncRelationsWithSchema400ApplicationJSONObject;
        return this;
    }
}