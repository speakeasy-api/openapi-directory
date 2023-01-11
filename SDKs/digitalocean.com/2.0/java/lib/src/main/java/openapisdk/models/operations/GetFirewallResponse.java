package openapisdk.models.operations;



public class GetFirewallResponse {
    public String contentType;
    public GetFirewallResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetFirewallResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetFirewallResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object getFirewall200ApplicationJSONAny;
    public GetFirewallResponse withGetFirewall200ApplicationJsonAny(Object getFirewall200ApplicationJSONAny) {
        this.getFirewall200ApplicationJSONAny = getFirewall200ApplicationJSONAny;
        return this;
    }
    public GetFirewall401ApplicationJson getFirewall401ApplicationJSONObject;
    public GetFirewallResponse withGetFirewall401ApplicationJsonObject(GetFirewall401ApplicationJson getFirewall401ApplicationJSONObject) {
        this.getFirewall401ApplicationJSONObject = getFirewall401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public GetFirewallResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}