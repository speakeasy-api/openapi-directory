package openapisdk.models.operations;



public class ListConnectionPoolsResponse {
    public String contentType;
    public ListConnectionPoolsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ListConnectionPoolsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ListConnectionPoolsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ListConnectionPools200ApplicationJson listConnectionPools200ApplicationJSONObject;
    public ListConnectionPoolsResponse withListConnectionPools200ApplicationJsonObject(ListConnectionPools200ApplicationJson listConnectionPools200ApplicationJSONObject) {
        this.listConnectionPools200ApplicationJSONObject = listConnectionPools200ApplicationJSONObject;
        return this;
    }
    public ListConnectionPools401ApplicationJson listConnectionPools401ApplicationJSONObject;
    public ListConnectionPoolsResponse withListConnectionPools401ApplicationJsonObject(ListConnectionPools401ApplicationJson listConnectionPools401ApplicationJSONObject) {
        this.listConnectionPools401ApplicationJSONObject = listConnectionPools401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public ListConnectionPoolsResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}