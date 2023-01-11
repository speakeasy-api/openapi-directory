package openapisdk.models.operations;



public class ListResponse {
    public String contentType;
    public ListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ListResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object list200ApplicationJSONAny;
    public ListResponse withList200ApplicationJsonAny(Object list200ApplicationJSONAny) {
        this.list200ApplicationJSONAny = list200ApplicationJSONAny;
        return this;
    }
    public List401ApplicationJson list401ApplicationJSONObject;
    public ListResponse withList401ApplicationJsonObject(List401ApplicationJson list401ApplicationJSONObject) {
        this.list401ApplicationJSONObject = list401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public ListResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}