package openapisdk.models.operations;



public class UpdateEvictionPolicyResponse {
    public String contentType;
    public UpdateEvictionPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public UpdateEvictionPolicyResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public UpdateEvictionPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public UpdateEvictionPolicy401ApplicationJson updateEvictionPolicy401ApplicationJSONObject;
    public UpdateEvictionPolicyResponse withUpdateEvictionPolicy401ApplicationJsonObject(UpdateEvictionPolicy401ApplicationJson updateEvictionPolicy401ApplicationJSONObject) {
        this.updateEvictionPolicy401ApplicationJSONObject = updateEvictionPolicy401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public UpdateEvictionPolicyResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}