package openapisdk.models.operations;



public class AddFirewallDropletsResponse {
    public String contentType;
    public AddFirewallDropletsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public AddFirewallDropletsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public AddFirewallDropletsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public AddFirewallDroplets401ApplicationJson addFirewallDroplets401ApplicationJSONObject;
    public AddFirewallDropletsResponse withAddFirewallDroplets401ApplicationJsonObject(AddFirewallDroplets401ApplicationJson addFirewallDroplets401ApplicationJSONObject) {
        this.addFirewallDroplets401ApplicationJSONObject = addFirewallDroplets401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public AddFirewallDropletsResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}