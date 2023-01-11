package openapisdk.models.operations;



public class UpdateDatabaseClusterSizeResponse {
    public String contentType;
    public UpdateDatabaseClusterSizeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public UpdateDatabaseClusterSizeResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public UpdateDatabaseClusterSizeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public UpdateDatabaseClusterSize401ApplicationJson updateDatabaseClusterSize401ApplicationJSONObject;
    public UpdateDatabaseClusterSizeResponse withUpdateDatabaseClusterSize401ApplicationJsonObject(UpdateDatabaseClusterSize401ApplicationJson updateDatabaseClusterSize401ApplicationJSONObject) {
        this.updateDatabaseClusterSize401ApplicationJSONObject = updateDatabaseClusterSize401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public UpdateDatabaseClusterSizeResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}