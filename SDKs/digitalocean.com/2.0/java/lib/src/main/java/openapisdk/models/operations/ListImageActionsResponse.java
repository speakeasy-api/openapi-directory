package openapisdk.models.operations;



public class ListImageActionsResponse {
    public String contentType;
    public ListImageActionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ListImageActionsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ListImageActionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ListImageActions200ApplicationJson listImageActions200ApplicationJSONObject;
    public ListImageActionsResponse withListImageActions200ApplicationJsonObject(ListImageActions200ApplicationJson listImageActions200ApplicationJSONObject) {
        this.listImageActions200ApplicationJSONObject = listImageActions200ApplicationJSONObject;
        return this;
    }
    public ListImageActions401ApplicationJson listImageActions401ApplicationJSONObject;
    public ListImageActionsResponse withListImageActions401ApplicationJsonObject(ListImageActions401ApplicationJson listImageActions401ApplicationJSONObject) {
        this.listImageActions401ApplicationJSONObject = listImageActions401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public ListImageActionsResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}