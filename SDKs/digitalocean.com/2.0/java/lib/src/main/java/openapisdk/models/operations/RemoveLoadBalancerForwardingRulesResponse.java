package openapisdk.models.operations;



public class RemoveLoadBalancerForwardingRulesResponse {
    public String contentType;
    public RemoveLoadBalancerForwardingRulesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public RemoveLoadBalancerForwardingRulesResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public RemoveLoadBalancerForwardingRulesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public RemoveLoadBalancerForwardingRules401ApplicationJson removeLoadBalancerForwardingRules401ApplicationJSONObject;
    public RemoveLoadBalancerForwardingRulesResponse withRemoveLoadBalancerForwardingRules401ApplicationJsonObject(RemoveLoadBalancerForwardingRules401ApplicationJson removeLoadBalancerForwardingRules401ApplicationJSONObject) {
        this.removeLoadBalancerForwardingRules401ApplicationJSONObject = removeLoadBalancerForwardingRules401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public RemoveLoadBalancerForwardingRulesResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}