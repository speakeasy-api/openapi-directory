package openapisdk.models.operations;



public class UpdateDatabaseClusterResponse {
    public String contentType;
    public UpdateDatabaseClusterResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public UpdateDatabaseClusterResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public UpdateDatabaseClusterResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public UpdateDatabaseCluster401ApplicationJson updateDatabaseCluster401ApplicationJSONObject;
    public UpdateDatabaseClusterResponse withUpdateDatabaseCluster401ApplicationJsonObject(UpdateDatabaseCluster401ApplicationJson updateDatabaseCluster401ApplicationJSONObject) {
        this.updateDatabaseCluster401ApplicationJSONObject = updateDatabaseCluster401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public UpdateDatabaseClusterResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}