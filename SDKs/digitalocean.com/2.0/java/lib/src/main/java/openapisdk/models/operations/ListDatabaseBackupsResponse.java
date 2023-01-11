package openapisdk.models.operations;



public class ListDatabaseBackupsResponse {
    public String contentType;
    public ListDatabaseBackupsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ListDatabaseBackupsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ListDatabaseBackupsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ListDatabaseBackups200ApplicationJson listDatabaseBackups200ApplicationJSONObject;
    public ListDatabaseBackupsResponse withListDatabaseBackups200ApplicationJsonObject(ListDatabaseBackups200ApplicationJson listDatabaseBackups200ApplicationJSONObject) {
        this.listDatabaseBackups200ApplicationJSONObject = listDatabaseBackups200ApplicationJSONObject;
        return this;
    }
    public ListDatabaseBackups401ApplicationJson listDatabaseBackups401ApplicationJSONObject;
    public ListDatabaseBackupsResponse withListDatabaseBackups401ApplicationJsonObject(ListDatabaseBackups401ApplicationJson listDatabaseBackups401ApplicationJSONObject) {
        this.listDatabaseBackups401ApplicationJSONObject = listDatabaseBackups401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public ListDatabaseBackupsResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}