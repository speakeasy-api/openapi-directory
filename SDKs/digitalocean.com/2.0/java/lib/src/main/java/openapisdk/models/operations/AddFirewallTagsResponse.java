package openapisdk.models.operations;



public class AddFirewallTagsResponse {
    public String contentType;
    public AddFirewallTagsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public AddFirewallTagsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public AddFirewallTagsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public AddFirewallTags401ApplicationJson addFirewallTags401ApplicationJSONObject;
    public AddFirewallTagsResponse withAddFirewallTags401ApplicationJsonObject(AddFirewallTags401ApplicationJson addFirewallTags401ApplicationJSONObject) {
        this.addFirewallTags401ApplicationJSONObject = addFirewallTags401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public AddFirewallTagsResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}