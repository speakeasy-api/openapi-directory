package openapisdk.models.operations;



public class GetMigrationStatusResponse {
    public String contentType;
    public GetMigrationStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetMigrationStatusResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetMigrationStatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetMigrationStatus200ApplicationJson getMigrationStatus200ApplicationJSONObject;
    public GetMigrationStatusResponse withGetMigrationStatus200ApplicationJsonObject(GetMigrationStatus200ApplicationJson getMigrationStatus200ApplicationJSONObject) {
        this.getMigrationStatus200ApplicationJSONObject = getMigrationStatus200ApplicationJSONObject;
        return this;
    }
    public GetMigrationStatus401ApplicationJson getMigrationStatus401ApplicationJSONObject;
    public GetMigrationStatusResponse withGetMigrationStatus401ApplicationJsonObject(GetMigrationStatus401ApplicationJson getMigrationStatus401ApplicationJSONObject) {
        this.getMigrationStatus401ApplicationJSONObject = getMigrationStatus401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public GetMigrationStatusResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}