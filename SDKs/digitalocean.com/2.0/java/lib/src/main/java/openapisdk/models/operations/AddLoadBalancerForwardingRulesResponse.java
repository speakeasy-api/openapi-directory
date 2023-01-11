package openapisdk.models.operations;



public class AddLoadBalancerForwardingRulesResponse {
    public String contentType;
    public AddLoadBalancerForwardingRulesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public AddLoadBalancerForwardingRulesResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public AddLoadBalancerForwardingRulesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public AddLoadBalancerForwardingRules401ApplicationJson addLoadBalancerForwardingRules401ApplicationJSONObject;
    public AddLoadBalancerForwardingRulesResponse withAddLoadBalancerForwardingRules401ApplicationJsonObject(AddLoadBalancerForwardingRules401ApplicationJson addLoadBalancerForwardingRules401ApplicationJSONObject) {
        this.addLoadBalancerForwardingRules401ApplicationJSONObject = addLoadBalancerForwardingRules401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public AddLoadBalancerForwardingRulesResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}