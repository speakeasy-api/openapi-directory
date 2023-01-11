package openapisdk.models.operations;



public class ListVpcsResponse {
    public String contentType;
    public ListVpcsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ListVpcsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ListVpcsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ListVpcs200ApplicationJson listVpcs200ApplicationJSONObject;
    public ListVpcsResponse withListVpcs200ApplicationJsonObject(ListVpcs200ApplicationJson listVpcs200ApplicationJSONObject) {
        this.listVpcs200ApplicationJSONObject = listVpcs200ApplicationJSONObject;
        return this;
    }
    public ListVpcs401ApplicationJson listVpcs401ApplicationJSONObject;
    public ListVpcsResponse withListVpcs401ApplicationJsonObject(ListVpcs401ApplicationJson listVpcs401ApplicationJSONObject) {
        this.listVpcs401ApplicationJSONObject = listVpcs401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public ListVpcsResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}