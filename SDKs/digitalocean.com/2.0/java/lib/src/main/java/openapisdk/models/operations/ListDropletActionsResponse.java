package openapisdk.models.operations;



public class ListDropletActionsResponse {
    public String contentType;
    public ListDropletActionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ListDropletActionsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ListDropletActionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ListDropletActions200ApplicationJson listDropletActions200ApplicationJSONObject;
    public ListDropletActionsResponse withListDropletActions200ApplicationJsonObject(ListDropletActions200ApplicationJson listDropletActions200ApplicationJSONObject) {
        this.listDropletActions200ApplicationJSONObject = listDropletActions200ApplicationJSONObject;
        return this;
    }
    public ListDropletActions401ApplicationJson listDropletActions401ApplicationJSONObject;
    public ListDropletActionsResponse withListDropletActions401ApplicationJsonObject(ListDropletActions401ApplicationJson listDropletActions401ApplicationJSONObject) {
        this.listDropletActions401ApplicationJSONObject = listDropletActions401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public ListDropletActionsResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}