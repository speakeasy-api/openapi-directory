package openapisdk.models.operations;



public class CreateFirewallResponse {
    public String contentType;
    public CreateFirewallResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public CreateFirewallResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public CreateFirewallResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object createFirewall202ApplicationJSONAny;
    public CreateFirewallResponse withCreateFirewall202ApplicationJsonAny(Object createFirewall202ApplicationJSONAny) {
        this.createFirewall202ApplicationJSONAny = createFirewall202ApplicationJSONAny;
        return this;
    }
    public CreateFirewall401ApplicationJson createFirewall401ApplicationJSONObject;
    public CreateFirewallResponse withCreateFirewall401ApplicationJsonObject(CreateFirewall401ApplicationJson createFirewall401ApplicationJSONObject) {
        this.createFirewall401ApplicationJSONObject = createFirewall401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public CreateFirewallResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}