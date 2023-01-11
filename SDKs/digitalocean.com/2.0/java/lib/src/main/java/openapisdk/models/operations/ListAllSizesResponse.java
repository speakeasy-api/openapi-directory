package openapisdk.models.operations;



public class ListAllSizesResponse {
    public String contentType;
    public ListAllSizesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ListAllSizesResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ListAllSizesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ListAllSizes200ApplicationJson listAllSizes200ApplicationJSONObject;
    public ListAllSizesResponse withListAllSizes200ApplicationJsonObject(ListAllSizes200ApplicationJson listAllSizes200ApplicationJSONObject) {
        this.listAllSizes200ApplicationJSONObject = listAllSizes200ApplicationJSONObject;
        return this;
    }
    public ListAllSizes401ApplicationJson listAllSizes401ApplicationJSONObject;
    public ListAllSizesResponse withListAllSizes401ApplicationJsonObject(ListAllSizes401ApplicationJson listAllSizes401ApplicationJSONObject) {
        this.listAllSizes401ApplicationJSONObject = listAllSizes401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public ListAllSizesResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}