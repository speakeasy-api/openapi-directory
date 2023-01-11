package openapisdk.models.operations;



public class ListFirewallsResponse {
    public String contentType;
    public ListFirewallsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ListFirewallsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ListFirewallsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ListFirewalls200ApplicationJson listFirewalls200ApplicationJSONObject;
    public ListFirewallsResponse withListFirewalls200ApplicationJsonObject(ListFirewalls200ApplicationJson listFirewalls200ApplicationJSONObject) {
        this.listFirewalls200ApplicationJSONObject = listFirewalls200ApplicationJSONObject;
        return this;
    }
    public ListFirewalls401ApplicationJson listFirewalls401ApplicationJSONObject;
    public ListFirewallsResponse withListFirewalls401ApplicationJsonObject(ListFirewalls401ApplicationJson listFirewalls401ApplicationJSONObject) {
        this.listFirewalls401ApplicationJSONObject = listFirewalls401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public ListFirewallsResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}