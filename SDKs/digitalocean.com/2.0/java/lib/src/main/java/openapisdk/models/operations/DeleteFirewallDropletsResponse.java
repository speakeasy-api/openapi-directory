package openapisdk.models.operations;



public class DeleteFirewallDropletsResponse {
    public String contentType;
    public DeleteFirewallDropletsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public DeleteFirewallDropletsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public DeleteFirewallDropletsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DeleteFirewallDroplets401ApplicationJson deleteFirewallDroplets401ApplicationJSONObject;
    public DeleteFirewallDropletsResponse withDeleteFirewallDroplets401ApplicationJsonObject(DeleteFirewallDroplets401ApplicationJson deleteFirewallDroplets401ApplicationJSONObject) {
        this.deleteFirewallDroplets401ApplicationJSONObject = deleteFirewallDroplets401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public DeleteFirewallDropletsResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}