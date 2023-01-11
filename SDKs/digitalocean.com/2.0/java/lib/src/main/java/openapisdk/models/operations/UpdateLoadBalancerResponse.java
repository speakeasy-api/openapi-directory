package openapisdk.models.operations;



public class UpdateLoadBalancerResponse {
    public String contentType;
    public UpdateLoadBalancerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public UpdateLoadBalancerResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public UpdateLoadBalancerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object updateLoadBalancer200ApplicationJSONAny;
    public UpdateLoadBalancerResponse withUpdateLoadBalancer200ApplicationJsonAny(Object updateLoadBalancer200ApplicationJSONAny) {
        this.updateLoadBalancer200ApplicationJSONAny = updateLoadBalancer200ApplicationJSONAny;
        return this;
    }
    public UpdateLoadBalancer401ApplicationJson updateLoadBalancer401ApplicationJSONObject;
    public UpdateLoadBalancerResponse withUpdateLoadBalancer401ApplicationJsonObject(UpdateLoadBalancer401ApplicationJson updateLoadBalancer401ApplicationJSONObject) {
        this.updateLoadBalancer401ApplicationJSONObject = updateLoadBalancer401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public UpdateLoadBalancerResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}