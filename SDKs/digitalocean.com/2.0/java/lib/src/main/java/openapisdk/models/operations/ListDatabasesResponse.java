package openapisdk.models.operations;



public class ListDatabasesResponse {
    public String contentType;
    public ListDatabasesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ListDatabasesResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ListDatabasesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object listDatabases200ApplicationJSONAny;
    public ListDatabasesResponse withListDatabases200ApplicationJsonAny(Object listDatabases200ApplicationJSONAny) {
        this.listDatabases200ApplicationJSONAny = listDatabases200ApplicationJSONAny;
        return this;
    }
    public ListDatabases401ApplicationJson listDatabases401ApplicationJSONObject;
    public ListDatabasesResponse withListDatabases401ApplicationJsonObject(ListDatabases401ApplicationJson listDatabases401ApplicationJSONObject) {
        this.listDatabases401ApplicationJSONObject = listDatabases401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public ListDatabasesResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}