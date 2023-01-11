package openapisdk.models.operations;



public class DeleteFirewallResponse {
    public String contentType;
    public DeleteFirewallResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public DeleteFirewallResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public DeleteFirewallResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DeleteFirewall401ApplicationJson deleteFirewall401ApplicationJSONObject;
    public DeleteFirewallResponse withDeleteFirewall401ApplicationJsonObject(DeleteFirewall401ApplicationJson deleteFirewall401ApplicationJSONObject) {
        this.deleteFirewall401ApplicationJSONObject = deleteFirewall401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public DeleteFirewallResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}