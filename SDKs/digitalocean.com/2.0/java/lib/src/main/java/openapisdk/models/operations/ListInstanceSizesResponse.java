package openapisdk.models.operations;



public class ListInstanceSizesResponse {
    public String contentType;
    public ListInstanceSizesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ListInstanceSizesResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ListInstanceSizesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ListInstanceSizes200ApplicationJson listInstanceSizes200ApplicationJSONObject;
    public ListInstanceSizesResponse withListInstanceSizes200ApplicationJsonObject(ListInstanceSizes200ApplicationJson listInstanceSizes200ApplicationJSONObject) {
        this.listInstanceSizes200ApplicationJSONObject = listInstanceSizes200ApplicationJSONObject;
        return this;
    }
    public ListInstanceSizes401ApplicationJson listInstanceSizes401ApplicationJSONObject;
    public ListInstanceSizesResponse withListInstanceSizes401ApplicationJsonObject(ListInstanceSizes401ApplicationJson listInstanceSizes401ApplicationJSONObject) {
        this.listInstanceSizes401ApplicationJSONObject = listInstanceSizes401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public ListInstanceSizesResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}