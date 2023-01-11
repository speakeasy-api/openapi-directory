package openapisdk.models.operations;



public class ListNodePoolsResponse {
    public String contentType;
    public ListNodePoolsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ListNodePoolsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ListNodePoolsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object listNodePools200ApplicationJSONAny;
    public ListNodePoolsResponse withListNodePools200ApplicationJsonAny(Object listNodePools200ApplicationJSONAny) {
        this.listNodePools200ApplicationJSONAny = listNodePools200ApplicationJSONAny;
        return this;
    }
    public ListNodePools401ApplicationJson listNodePools401ApplicationJSONObject;
    public ListNodePoolsResponse withListNodePools401ApplicationJsonObject(ListNodePools401ApplicationJson listNodePools401ApplicationJSONObject) {
        this.listNodePools401ApplicationJSONObject = listNodePools401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public ListNodePoolsResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}