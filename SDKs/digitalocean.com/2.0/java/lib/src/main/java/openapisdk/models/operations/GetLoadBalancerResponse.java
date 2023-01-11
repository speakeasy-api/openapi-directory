package openapisdk.models.operations;



public class GetLoadBalancerResponse {
    public String contentType;
    public GetLoadBalancerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetLoadBalancerResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetLoadBalancerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object getLoadBalancer200ApplicationJSONAny;
    public GetLoadBalancerResponse withGetLoadBalancer200ApplicationJsonAny(Object getLoadBalancer200ApplicationJSONAny) {
        this.getLoadBalancer200ApplicationJSONAny = getLoadBalancer200ApplicationJSONAny;
        return this;
    }
    public GetLoadBalancer401ApplicationJson getLoadBalancer401ApplicationJSONObject;
    public GetLoadBalancerResponse withGetLoadBalancer401ApplicationJsonObject(GetLoadBalancer401ApplicationJson getLoadBalancer401ApplicationJSONObject) {
        this.getLoadBalancer401ApplicationJSONObject = getLoadBalancer401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public GetLoadBalancerResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}