package openapisdk.models.operations;



public class UpdateOnlineMigrationResponse {
    public String contentType;
    public UpdateOnlineMigrationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public UpdateOnlineMigrationResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public UpdateOnlineMigrationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public UpdateOnlineMigration200ApplicationJson updateOnlineMigration200ApplicationJSONObject;
    public UpdateOnlineMigrationResponse withUpdateOnlineMigration200ApplicationJsonObject(UpdateOnlineMigration200ApplicationJson updateOnlineMigration200ApplicationJSONObject) {
        this.updateOnlineMigration200ApplicationJSONObject = updateOnlineMigration200ApplicationJSONObject;
        return this;
    }
    public UpdateOnlineMigration401ApplicationJson updateOnlineMigration401ApplicationJSONObject;
    public UpdateOnlineMigrationResponse withUpdateOnlineMigration401ApplicationJsonObject(UpdateOnlineMigration401ApplicationJson updateOnlineMigration401ApplicationJSONObject) {
        this.updateOnlineMigration401ApplicationJSONObject = updateOnlineMigration401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public UpdateOnlineMigrationResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}