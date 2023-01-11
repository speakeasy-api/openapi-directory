package openapisdk.models.operations;



public class ListAllKeysResponse {
    public String contentType;
    public ListAllKeysResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ListAllKeysResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ListAllKeysResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ListAllKeys200ApplicationJson listAllKeys200ApplicationJSONObject;
    public ListAllKeysResponse withListAllKeys200ApplicationJsonObject(ListAllKeys200ApplicationJson listAllKeys200ApplicationJSONObject) {
        this.listAllKeys200ApplicationJSONObject = listAllKeys200ApplicationJSONObject;
        return this;
    }
    public ListAllKeys401ApplicationJson listAllKeys401ApplicationJSONObject;
    public ListAllKeysResponse withListAllKeys401ApplicationJsonObject(ListAllKeys401ApplicationJson listAllKeys401ApplicationJSONObject) {
        this.listAllKeys401ApplicationJSONObject = listAllKeys401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public ListAllKeysResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}