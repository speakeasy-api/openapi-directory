package openapisdk.models.operations;



public class AddFirewallRulesResponse {
    public String contentType;
    public AddFirewallRulesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public AddFirewallRulesResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public AddFirewallRulesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public AddFirewallRules401ApplicationJson addFirewallRules401ApplicationJSONObject;
    public AddFirewallRulesResponse withAddFirewallRules401ApplicationJsonObject(AddFirewallRules401ApplicationJson addFirewallRules401ApplicationJSONObject) {
        this.addFirewallRules401ApplicationJSONObject = addFirewallRules401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public AddFirewallRulesResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}