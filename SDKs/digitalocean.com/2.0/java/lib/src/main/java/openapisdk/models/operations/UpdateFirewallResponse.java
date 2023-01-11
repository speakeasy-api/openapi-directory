package openapisdk.models.operations;



public class UpdateFirewallResponse {
    public String contentType;
    public UpdateFirewallResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public UpdateFirewallResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public UpdateFirewallResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object updateFirewall200ApplicationJSONAny;
    public UpdateFirewallResponse withUpdateFirewall200ApplicationJsonAny(Object updateFirewall200ApplicationJSONAny) {
        this.updateFirewall200ApplicationJSONAny = updateFirewall200ApplicationJSONAny;
        return this;
    }
    public UpdateFirewall401ApplicationJson updateFirewall401ApplicationJSONObject;
    public UpdateFirewallResponse withUpdateFirewall401ApplicationJsonObject(UpdateFirewall401ApplicationJson updateFirewall401ApplicationJSONObject) {
        this.updateFirewall401ApplicationJSONObject = updateFirewall401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public UpdateFirewallResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}