package openapisdk.models.operations;



public class CreateLoadBalancerResponse {
    public String contentType;
    public CreateLoadBalancerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public CreateLoadBalancerResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public CreateLoadBalancerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object createLoadBalancer202ApplicationJSONAny;
    public CreateLoadBalancerResponse withCreateLoadBalancer202ApplicationJsonAny(Object createLoadBalancer202ApplicationJSONAny) {
        this.createLoadBalancer202ApplicationJSONAny = createLoadBalancer202ApplicationJSONAny;
        return this;
    }
    public CreateLoadBalancer401ApplicationJson createLoadBalancer401ApplicationJSONObject;
    public CreateLoadBalancerResponse withCreateLoadBalancer401ApplicationJsonObject(CreateLoadBalancer401ApplicationJson createLoadBalancer401ApplicationJSONObject) {
        this.createLoadBalancer401ApplicationJSONObject = createLoadBalancer401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public CreateLoadBalancerResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}