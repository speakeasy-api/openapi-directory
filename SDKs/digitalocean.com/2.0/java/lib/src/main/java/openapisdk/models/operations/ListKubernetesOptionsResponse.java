package openapisdk.models.operations;



public class ListKubernetesOptionsResponse {
    public String contentType;
    public ListKubernetesOptionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ListKubernetesOptionsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ListKubernetesOptionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ListKubernetesOptions200ApplicationJson listKubernetesOptions200ApplicationJSONObject;
    public ListKubernetesOptionsResponse withListKubernetesOptions200ApplicationJsonObject(ListKubernetesOptions200ApplicationJson listKubernetesOptions200ApplicationJSONObject) {
        this.listKubernetesOptions200ApplicationJSONObject = listKubernetesOptions200ApplicationJSONObject;
        return this;
    }
    public ListKubernetesOptions401ApplicationJson listKubernetesOptions401ApplicationJSONObject;
    public ListKubernetesOptionsResponse withListKubernetesOptions401ApplicationJsonObject(ListKubernetesOptions401ApplicationJson listKubernetesOptions401ApplicationJSONObject) {
        this.listKubernetesOptions401ApplicationJSONObject = listKubernetesOptions401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public ListKubernetesOptionsResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}