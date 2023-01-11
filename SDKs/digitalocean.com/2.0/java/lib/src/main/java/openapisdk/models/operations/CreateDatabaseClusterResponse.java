package openapisdk.models.operations;



public class CreateDatabaseClusterResponse {
    public String contentType;
    public CreateDatabaseClusterResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public CreateDatabaseClusterResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public CreateDatabaseClusterResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public CreateDatabaseCluster201ApplicationJson createDatabaseCluster201ApplicationJSONObject;
    public CreateDatabaseClusterResponse withCreateDatabaseCluster201ApplicationJsonObject(CreateDatabaseCluster201ApplicationJson createDatabaseCluster201ApplicationJSONObject) {
        this.createDatabaseCluster201ApplicationJSONObject = createDatabaseCluster201ApplicationJSONObject;
        return this;
    }
    public CreateDatabaseCluster401ApplicationJson createDatabaseCluster401ApplicationJSONObject;
    public CreateDatabaseClusterResponse withCreateDatabaseCluster401ApplicationJsonObject(CreateDatabaseCluster401ApplicationJson createDatabaseCluster401ApplicationJSONObject) {
        this.createDatabaseCluster401ApplicationJSONObject = createDatabaseCluster401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public CreateDatabaseClusterResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}