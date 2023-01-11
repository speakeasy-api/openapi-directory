package openapisdk.models.operations;



public class DeleteFirewallRulesResponse {
    public String contentType;
    public DeleteFirewallRulesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public DeleteFirewallRulesResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public DeleteFirewallRulesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DeleteFirewallRules401ApplicationJson deleteFirewallRules401ApplicationJSONObject;
    public DeleteFirewallRulesResponse withDeleteFirewallRules401ApplicationJsonObject(DeleteFirewallRules401ApplicationJson deleteFirewallRules401ApplicationJSONObject) {
        this.deleteFirewallRules401ApplicationJSONObject = deleteFirewallRules401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public DeleteFirewallRulesResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}