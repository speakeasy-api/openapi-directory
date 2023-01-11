package openapisdk.models.operations;



public class RemoveLoadBalancerDropletsResponse {
    public String contentType;
    public RemoveLoadBalancerDropletsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public RemoveLoadBalancerDropletsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public RemoveLoadBalancerDropletsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public RemoveLoadBalancerDroplets401ApplicationJson removeLoadBalancerDroplets401ApplicationJSONObject;
    public RemoveLoadBalancerDropletsResponse withRemoveLoadBalancerDroplets401ApplicationJsonObject(RemoveLoadBalancerDroplets401ApplicationJson removeLoadBalancerDroplets401ApplicationJSONObject) {
        this.removeLoadBalancerDroplets401ApplicationJSONObject = removeLoadBalancerDroplets401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public RemoveLoadBalancerDropletsResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}