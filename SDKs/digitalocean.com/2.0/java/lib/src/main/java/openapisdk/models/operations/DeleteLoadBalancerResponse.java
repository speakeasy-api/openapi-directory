package openapisdk.models.operations;



public class DeleteLoadBalancerResponse {
    public String contentType;
    public DeleteLoadBalancerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public DeleteLoadBalancerResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public DeleteLoadBalancerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DeleteLoadBalancer401ApplicationJson deleteLoadBalancer401ApplicationJSONObject;
    public DeleteLoadBalancerResponse withDeleteLoadBalancer401ApplicationJsonObject(DeleteLoadBalancer401ApplicationJson deleteLoadBalancer401ApplicationJSONObject) {
        this.deleteLoadBalancer401ApplicationJSONObject = deleteLoadBalancer401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public DeleteLoadBalancerResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}