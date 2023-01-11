package openapisdk.models.operations;



public class AddLoadBalancerDropletsResponse {
    public String contentType;
    public AddLoadBalancerDropletsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public AddLoadBalancerDropletsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public AddLoadBalancerDropletsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public AddLoadBalancerDroplets401ApplicationJson addLoadBalancerDroplets401ApplicationJSONObject;
    public AddLoadBalancerDropletsResponse withAddLoadBalancerDroplets401ApplicationJsonObject(AddLoadBalancerDroplets401ApplicationJson addLoadBalancerDroplets401ApplicationJSONObject) {
        this.addLoadBalancerDroplets401ApplicationJSONObject = addLoadBalancerDroplets401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public AddLoadBalancerDropletsResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}