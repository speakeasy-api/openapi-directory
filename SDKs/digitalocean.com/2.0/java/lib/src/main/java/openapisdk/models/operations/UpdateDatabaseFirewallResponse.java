package openapisdk.models.operations;



public class UpdateDatabaseFirewallResponse {
    public String contentType;
    public UpdateDatabaseFirewallResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public UpdateDatabaseFirewallResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public UpdateDatabaseFirewallResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public UpdateDatabaseFirewall401ApplicationJson updateDatabaseFirewall401ApplicationJSONObject;
    public UpdateDatabaseFirewallResponse withUpdateDatabaseFirewall401ApplicationJsonObject(UpdateDatabaseFirewall401ApplicationJson updateDatabaseFirewall401ApplicationJSONObject) {
        this.updateDatabaseFirewall401ApplicationJSONObject = updateDatabaseFirewall401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public UpdateDatabaseFirewallResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}