package openapisdk.models.operations;



public class GetDatabaseClusterResponse {
    public String contentType;
    public GetDatabaseClusterResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetDatabaseClusterResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetDatabaseClusterResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetDatabaseCluster200ApplicationJson getDatabaseCluster200ApplicationJSONObject;
    public GetDatabaseClusterResponse withGetDatabaseCluster200ApplicationJsonObject(GetDatabaseCluster200ApplicationJson getDatabaseCluster200ApplicationJSONObject) {
        this.getDatabaseCluster200ApplicationJSONObject = getDatabaseCluster200ApplicationJSONObject;
        return this;
    }
    public GetDatabaseCluster401ApplicationJson getDatabaseCluster401ApplicationJSONObject;
    public GetDatabaseClusterResponse withGetDatabaseCluster401ApplicationJsonObject(GetDatabaseCluster401ApplicationJson getDatabaseCluster401ApplicationJSONObject) {
        this.getDatabaseCluster401ApplicationJSONObject = getDatabaseCluster401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public GetDatabaseClusterResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}