package openapisdk.models.operations;



public class ListAllDropletsResponse {
    public String contentType;
    public ListAllDropletsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ListAllDropletsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ListAllDropletsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ListAllDroplets200ApplicationJson listAllDroplets200ApplicationJSONObject;
    public ListAllDropletsResponse withListAllDroplets200ApplicationJsonObject(ListAllDroplets200ApplicationJson listAllDroplets200ApplicationJSONObject) {
        this.listAllDroplets200ApplicationJSONObject = listAllDroplets200ApplicationJSONObject;
        return this;
    }
    public ListAllDroplets401ApplicationJson listAllDroplets401ApplicationJSONObject;
    public ListAllDropletsResponse withListAllDroplets401ApplicationJsonObject(ListAllDroplets401ApplicationJson listAllDroplets401ApplicationJSONObject) {
        this.listAllDroplets401ApplicationJSONObject = listAllDroplets401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public ListAllDropletsResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}