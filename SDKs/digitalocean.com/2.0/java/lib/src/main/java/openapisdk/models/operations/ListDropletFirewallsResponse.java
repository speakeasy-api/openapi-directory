package openapisdk.models.operations;



public class ListDropletFirewallsResponse {
    public String contentType;
    public ListDropletFirewallsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ListDropletFirewallsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ListDropletFirewallsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ListDropletFirewalls200ApplicationJson listDropletFirewalls200ApplicationJSONObject;
    public ListDropletFirewallsResponse withListDropletFirewalls200ApplicationJsonObject(ListDropletFirewalls200ApplicationJson listDropletFirewalls200ApplicationJSONObject) {
        this.listDropletFirewalls200ApplicationJSONObject = listDropletFirewalls200ApplicationJSONObject;
        return this;
    }
    public ListDropletFirewalls401ApplicationJson listDropletFirewalls401ApplicationJSONObject;
    public ListDropletFirewallsResponse withListDropletFirewalls401ApplicationJsonObject(ListDropletFirewalls401ApplicationJson listDropletFirewalls401ApplicationJSONObject) {
        this.listDropletFirewalls401ApplicationJSONObject = listDropletFirewalls401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public ListDropletFirewallsResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}