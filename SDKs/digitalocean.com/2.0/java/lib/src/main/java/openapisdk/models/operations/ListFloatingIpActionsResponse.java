package openapisdk.models.operations;



public class ListFloatingIpActionsResponse {
    public String contentType;
    public ListFloatingIpActionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ListFloatingIpActionsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ListFloatingIpActionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ListFloatingIpActions200ApplicationJson listFloatingIpActions200ApplicationJSONObject;
    public ListFloatingIpActionsResponse withListFloatingIpActions200ApplicationJsonObject(ListFloatingIpActions200ApplicationJson listFloatingIpActions200ApplicationJSONObject) {
        this.listFloatingIpActions200ApplicationJSONObject = listFloatingIpActions200ApplicationJSONObject;
        return this;
    }
    public ListFloatingIpActions401ApplicationJson listFloatingIpActions401ApplicationJSONObject;
    public ListFloatingIpActionsResponse withListFloatingIpActions401ApplicationJsonObject(ListFloatingIpActions401ApplicationJson listFloatingIpActions401ApplicationJSONObject) {
        this.listFloatingIpActions401ApplicationJSONObject = listFloatingIpActions401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public ListFloatingIpActionsResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}