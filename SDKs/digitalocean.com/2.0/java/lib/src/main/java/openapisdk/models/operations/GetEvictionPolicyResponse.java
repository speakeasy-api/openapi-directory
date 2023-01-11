package openapisdk.models.operations;



public class GetEvictionPolicyResponse {
    public String contentType;
    public GetEvictionPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetEvictionPolicyResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetEvictionPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetEvictionPolicy200ApplicationJson getEvictionPolicy200ApplicationJSONObject;
    public GetEvictionPolicyResponse withGetEvictionPolicy200ApplicationJsonObject(GetEvictionPolicy200ApplicationJson getEvictionPolicy200ApplicationJSONObject) {
        this.getEvictionPolicy200ApplicationJSONObject = getEvictionPolicy200ApplicationJSONObject;
        return this;
    }
    public GetEvictionPolicy401ApplicationJson getEvictionPolicy401ApplicationJSONObject;
    public GetEvictionPolicyResponse withGetEvictionPolicy401ApplicationJsonObject(GetEvictionPolicy401ApplicationJson getEvictionPolicy401ApplicationJSONObject) {
        this.getEvictionPolicy401ApplicationJSONObject = getEvictionPolicy401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public GetEvictionPolicyResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}