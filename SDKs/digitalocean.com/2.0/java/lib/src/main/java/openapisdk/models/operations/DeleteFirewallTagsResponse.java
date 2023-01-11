package openapisdk.models.operations;



public class DeleteFirewallTagsResponse {
    public String contentType;
    public DeleteFirewallTagsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public DeleteFirewallTagsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public DeleteFirewallTagsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DeleteFirewallTags401ApplicationJson deleteFirewallTags401ApplicationJSONObject;
    public DeleteFirewallTagsResponse withDeleteFirewallTags401ApplicationJsonObject(DeleteFirewallTags401ApplicationJson deleteFirewallTags401ApplicationJSONObject) {
        this.deleteFirewallTags401ApplicationJSONObject = deleteFirewallTags401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public DeleteFirewallTagsResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}