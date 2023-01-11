package openapisdk.models.operations;



public class ListAllActionsResponse {
    public String contentType;
    public ListAllActionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ListAllActionsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ListAllActionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ListAllActions200ApplicationJson listAllActions200ApplicationJSONObject;
    public ListAllActionsResponse withListAllActions200ApplicationJsonObject(ListAllActions200ApplicationJson listAllActions200ApplicationJSONObject) {
        this.listAllActions200ApplicationJSONObject = listAllActions200ApplicationJSONObject;
        return this;
    }
    public ListAllActions401ApplicationJson listAllActions401ApplicationJSONObject;
    public ListAllActionsResponse withListAllActions401ApplicationJsonObject(ListAllActions401ApplicationJson listAllActions401ApplicationJSONObject) {
        this.listAllActions401ApplicationJSONObject = listAllActions401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public ListAllActionsResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}