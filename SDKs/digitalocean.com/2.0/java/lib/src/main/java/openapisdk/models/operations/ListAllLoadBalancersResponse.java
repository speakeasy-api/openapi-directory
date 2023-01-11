package openapisdk.models.operations;



public class ListAllLoadBalancersResponse {
    public String contentType;
    public ListAllLoadBalancersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ListAllLoadBalancersResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ListAllLoadBalancersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ListAllLoadBalancers200ApplicationJson listAllLoadBalancers200ApplicationJSONObject;
    public ListAllLoadBalancersResponse withListAllLoadBalancers200ApplicationJsonObject(ListAllLoadBalancers200ApplicationJson listAllLoadBalancers200ApplicationJSONObject) {
        this.listAllLoadBalancers200ApplicationJSONObject = listAllLoadBalancers200ApplicationJSONObject;
        return this;
    }
    public ListAllLoadBalancers401ApplicationJson listAllLoadBalancers401ApplicationJSONObject;
    public ListAllLoadBalancersResponse withListAllLoadBalancers401ApplicationJsonObject(ListAllLoadBalancers401ApplicationJson listAllLoadBalancers401ApplicationJSONObject) {
        this.listAllLoadBalancers401ApplicationJSONObject = listAllLoadBalancers401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public ListAllLoadBalancersResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}