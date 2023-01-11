package openapisdk.models.operations;



public class ListDatabaseFirewallsResponse {
    public String contentType;
    public ListDatabaseFirewallsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ListDatabaseFirewallsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ListDatabaseFirewallsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object listDatabaseFirewalls200ApplicationJSONAny;
    public ListDatabaseFirewallsResponse withListDatabaseFirewalls200ApplicationJsonAny(Object listDatabaseFirewalls200ApplicationJSONAny) {
        this.listDatabaseFirewalls200ApplicationJSONAny = listDatabaseFirewalls200ApplicationJSONAny;
        return this;
    }
    public ListDatabaseFirewalls401ApplicationJson listDatabaseFirewalls401ApplicationJSONObject;
    public ListDatabaseFirewallsResponse withListDatabaseFirewalls401ApplicationJsonObject(ListDatabaseFirewalls401ApplicationJson listDatabaseFirewalls401ApplicationJSONObject) {
        this.listDatabaseFirewalls401ApplicationJSONObject = listDatabaseFirewalls401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public ListDatabaseFirewallsResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}